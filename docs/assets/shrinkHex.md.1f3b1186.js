import{_ as s,c as a,o as e,a as n}from"./app.3178ba65.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"shrinkHex \u{1F389} \u{1F4AF}","slug":"shrinkhex","link":"#shrinkhex","children":[]}],"relativePath":"shrinkHex.md"}'),l={name:"shrinkHex.md"},t=n(`<h2 id="shrinkhex" tabindex="-1">shrinkHex \u{1F389} \u{1F4AF} <a class="header-anchor" href="#shrinkhex" aria-hidden="true">#</a></h2><p>\u5C066(8)\u4F4D16\u8FDB\u5236\u8272\u503C\u8F6C\u4E3A3(4)\u4F4D</p><h4 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h4><ul><li><strong>hex</strong> <code>string</code> \u5B57\u7B26\u4E32</li></ul><h4 id="td-ts" tabindex="-1">td.ts <a class="header-anchor" href="#td-ts" aria-hidden="true">#</a></h4><div class="info custom-block"><p class="custom-block-title">INFO</p><p><code>shrinkHex(hex: string): string</code></p></div><h4 id="\u8FD4\u56DE" tabindex="-1">\u8FD4\u56DE <a class="header-anchor" href="#\u8FD4\u56DE" aria-hidden="true">#</a></h4><ul><li><code>string</code></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>3\u4F4Dhex</p></div><h4 id="\u5F02\u5E38" tabindex="-1">\u5F02\u5E38 <a class="header-anchor" href="#\u5F02\u5E38" aria-hidden="true">#</a></h4><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>\u65E0\u6CD5\u8BC6\u522B\u6B63\u786E\u7684hex hex\u53C2\u6570\u4E0D\u662F\u6B63\u786E\u7684hex\u65F6\u89E6\u53D1</p></div><h4 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h4><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#82AAFF;">shrinkHex</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#0033ff</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;">// =&gt; &#39;#03f&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>// \u65E0\u6CD5\u8F6C\u5316\u7684\u539F\u6837\u8F93\u51FA</p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#82AAFF;">shrinkHex</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#0037ff</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;">// =&gt; &#39;#0037ff&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,15),r=[t];function i(o,c,p,d,h,u){return e(),a("div",null,r)}const b=s(l,[["render",i]]);export{_ as __pageData,b as default};