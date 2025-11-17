import shell from 'shelljs';
import path from 'node:path';
import process from 'process';

shell.set('-e'); // 出错立即退出

const root = process.cwd();
const docsDir = path.join(root, '.docs');
const docsGit = path.join(docsDir, '.git');

// ========== 1. 检查 .docs 是否存在, 不存在就创建 ==========
if (!shell.test('-d', docsDir)) {
  console.log('[INFO] 创建 .docs 目录');
  shell.mkdir('-p', docsDir);
}

// ========== 2. 没有 .git 就复制根目录的 .git ==========
if (!shell.test('-d', docsGit)) {
  console.log('[INFO] .docs 未发现 .git，开始复制根目录 .git');
  shell.cp('-R', path.join(root, '.git'), docsDir);
}

// ========== 3. 进入 .docs ==========
shell.cd(docsDir);

// ========== 4. 检查分支 ==========
const localBranch = shell.exec('git branch --list docs', { silent: true }).stdout.trim();
const remoteBranch = shell.exec('git ls-remote --heads origin docs', { silent: true }).stdout.trim();

const localExists = !!localBranch;
const remoteExists = !!remoteBranch;

if (!localExists) {
  if (remoteExists) {
    console.log('[INFO] 本地无 docs 分支，检出远端 docs');
    shell.exec('git fetch origin docs');
    shell.exec('git checkout -b docs origin/docs');
  } else {
    console.log('[INFO] 本地与远端都无 docs，创建 docs');
    shell.exec('git checkout -b docs');
  }
} else {
  console.log('[INFO] 本地已存在 docs 分支');
  shell.exec('git checkout docs');
}

// ========== 5. 如果远端没有 docs，推送本地 ==========
if (!remoteExists) {
  console.log('[INFO] 远端不存在 docs 分支，推送本地分支');
  shell.exec('git push -u origin docs');
}

// ========== 6. 检查本地 docs 分支是否有未推送的提交 ==========
console.log('[INFO] 检查 docs 分支状态');

shell.exec('git fetch origin docs', { silent: true });

// 获取状态：ahead / behind / diverged 等
const status = shell.exec(
  'git rev-list --left-right --count origin/docs...docs',
  { silent: true }
).stdout.trim();

// status 例子： "1\t0"  → 本地 ahead 1 个 commit
// status 例子： "0\t2"  → 本地 behind 2 个 commit
// status 例子： "3\t5"  → 双方分叉
const [behind, ahead] = status.split('\t').map(Number);

if (ahead > 0 && behind === 0) {
  // ========== 7. 存在未推送提交：先推送 ==========
  console.log(`[INFO] 本地 docs 比远端领先 ${ahead} 次提交，正在推送`);
  shell.exec('git push');
}

// ========== 8. 强制同步远端 docs ==========
console.log('[INFO] 强制同步远端 docs 分支（确保完全一致）');

shell.exec('git fetch origin docs');
shell.exec('git reset --hard origin/docs'); // local = remote

console.log('[DONE] docs 分支准备完毕');
