import{_ as s,c as a,o as t,O as e}from"./chunks/framework.d7e37bdc.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"assign.md","filePath":"assign.md"}'),o={name:"assign.md"},n=e('<h2 id="assign" tabindex="-1">assign 🎉 💯 <a class="header-anchor" href="#assign" aria-label="Permalink to &quot;assign :tada: :100:&quot;">​</a></h2><p>合并对象</p><h4 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h4><ul><li><p><strong>target</strong> <code>Record&lt;string, any&gt;</code> 目标对象，被合并的对象</p></li><li><p><strong>Rest ...sources</strong> <code>Record&lt;string, any&gt;[]</code> 源对象，可以多个</p></li></ul><h4 id="td-ts" tabindex="-1">td.ts <a class="header-anchor" href="#td-ts" aria-label="Permalink to &quot;td.ts&quot;">​</a></h4><div class="info custom-block"><p class="custom-block-title">INFO</p><p><code>assign(target, ...sources): Record&lt;string, any&gt;</code></p></div><h4 id="返回" tabindex="-1">返回 <a class="header-anchor" href="#返回" aria-label="Permalink to &quot;返回&quot;">​</a></h4><ul><li><code>Record</code></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>目标对象</p></div><h4 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-label="Permalink to &quot;实例&quot;">​</a></h4><p>对象合并效果与Object.assign一致</p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">assign</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">c</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">c</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// =&gt; {a: 1, c: 5}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>',12),l=[n];function c(r,p,i,d,h,u){return t(),a("div",null,l)}const _=s(o,[["render",c]]);export{y as __pageData,_ as default};
