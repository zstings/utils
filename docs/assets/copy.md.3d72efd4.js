import{_ as a,c as e,o as s,O as o}from"./chunks/framework.d7e37bdc.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"copy.md","filePath":"copy.md"}'),t={name:"copy.md"},l=o('<h2 id="copy" tabindex="-1">copy 🎉 💯 <a class="header-anchor" href="#copy" aria-label="Permalink to &quot;copy :tada: :100:&quot;">​</a></h2><p>复制文本内容</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>优先使用navigator.clipboard.writeText, 浏览器不支持使用时降级document.execCommand。</p></div><h4 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h4><ul><li><strong>value</strong> <code>string</code> 需要复制的字符串</li></ul><h4 id="td-ts" tabindex="-1">td.ts <a class="header-anchor" href="#td-ts" aria-label="Permalink to &quot;td.ts&quot;">​</a></h4><div class="info custom-block"><p class="custom-block-title">INFO</p><p><code>copy(value): Promise&lt;void&gt;</code></p></div><h4 id="返回" tabindex="-1">返回 <a class="header-anchor" href="#返回" aria-label="Permalink to &quot;返回&quot;">​</a></h4><ul><li><code>Promise</code></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Promise</p></div><h4 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-label="Permalink to &quot;实例&quot;">​</a></h4><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">copy</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>',12),c=[l];function n(i,r,p,d,h,u){return s(),e("div",null,c)}const b=a(t,[["render",n]]);export{_ as __pageData,b as default};
