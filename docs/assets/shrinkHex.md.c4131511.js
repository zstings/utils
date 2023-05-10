import{_ as a,c as s,o as e,O as t}from"./chunks/framework.d7e37bdc.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"shrinkHex.md","filePath":"shrinkHex.md"}'),n={name:"shrinkHex.md"},l=t('<h2 id="shrinkhex" tabindex="-1">shrinkHex 🎉 💯 <a class="header-anchor" href="#shrinkhex" aria-label="Permalink to &quot;shrinkHex :tada: :100:&quot;">​</a></h2><p>将6(8)位16进制色值转为3(4)位</p><h4 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h4><ul><li><strong>hex</strong> <code>string</code> 字符串</li></ul><h4 id="td-ts" tabindex="-1">td.ts <a class="header-anchor" href="#td-ts" aria-label="Permalink to &quot;td.ts&quot;">​</a></h4><div class="info custom-block"><p class="custom-block-title">INFO</p><p><code>shrinkHex(hex): string</code></p></div><h4 id="返回" tabindex="-1">返回 <a class="header-anchor" href="#返回" aria-label="Permalink to &quot;返回&quot;">​</a></h4><ul><li><code>string</code></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>3位hex</p></div><h4 id="异常" tabindex="-1">异常 <a class="header-anchor" href="#异常" aria-label="Permalink to &quot;异常&quot;">​</a></h4><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>无法识别正确的hex hex参数不是正确的hex时触发</p></div><h4 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-label="Permalink to &quot;实例&quot;">​</a></h4><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">shrinkHex</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#0033ff</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// =&gt; &#39;#03f&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>// 无法转化的原样输出</p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">shrinkHex</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#0037ff</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// =&gt; &#39;#0037ff&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>',15),o=[l];function r(i,c,p,d,h,u){return e(),s("div",null,o)}const k=a(n,[["render",r]]);export{b as __pageData,k as default};
