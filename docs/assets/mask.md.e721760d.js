import{_ as s,c as a,o as n,a as l}from"./app.77bcc4ee.js";const D=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"mask \u{1F389} \u{1F4AF}","slug":"mask","link":"#mask","children":[]}],"relativePath":"mask.md"}'),e={name:"mask.md"},p=l(`<h2 id="mask" tabindex="-1">mask \u{1F389} \u{1F4AF} <a class="header-anchor" href="#mask" aria-hidden="true">#</a></h2><p>\u5B57\u7B26\u4E32\u66FF\u6362</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>\u4F7F\u7528\u6307\u5B9A\u7684\u63A9\u7801\u5B57\u7B26\u66FF\u6362start~length\u4E4B\u95F4\u7684\u6240\u6709\u5B57\u7B26</p></div><h4 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h4><ul><li><p><strong>str</strong> <code>string</code> \u4F20\u5165\u53C2\u6570, \u5982\u679C\u53C2\u6570\u4E0D\u662F\u5B57\u7B26\u4E32\uFF0C\u4F1A\u5148\u8C03\u7528toString\u65B9\u6CD5</p></li><li><p><strong>start</strong> <code>number = 0</code> \u5F00\u59CB\u4E0B\u6807</p></li><li><p><strong>length?</strong> <code>number</code> \u957F\u5EA6</p></li><li><p><strong>mask</strong> <code>string = &#39;*&#39;</code> \u63A9\u7801\u5B57\u7B26 \u9ED8\u8BA4*</p></li></ul><h4 id="td-ts" tabindex="-1">td.ts <a class="header-anchor" href="#td-ts" aria-hidden="true">#</a></h4><div class="info custom-block"><p class="custom-block-title">INFO</p><p><code>mask(str: string, start?: number, length?: number, mask?: string): string</code></p></div><h4 id="\u8FD4\u56DE" tabindex="-1">\u8FD4\u56DE <a class="header-anchor" href="#\u8FD4\u56DE" aria-hidden="true">#</a></h4><ul><li><code>string</code></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u5B57\u7B26\u4E32</p></div><h4 id="\u5F02\u5E38" tabindex="-1">\u5F02\u5E38 <a class="header-anchor" href="#\u5F02\u5E38" aria-hidden="true">#</a></h4><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>start \u5FC5\u987B\u662F\u6570\u5B57 start\u4E0D\u662F\u6570\u5B57\u65F6\u89E6\u53D1</p></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>length \u5FC5\u987B\u662F\u6570\u5B57 length\u5B58\u5728\u4E14\u4E0D\u662F\u6570\u5B57\u65F6\u89E6\u53D1</p></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>mask \u5FC5\u987B\u662F\u5B57\u7B26\u4E32 mask\u4E0D\u662F\u5B57\u7B26\u4E32\u65F6\u89E6\u53D1</p></div><h4 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h4><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#82AAFF;">mask</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">123456</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;">// =&gt; &#39;******&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u8BBE\u7F6E\u5F00\u59CB\u4F4D\u7F6E</p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#82AAFF;">mask</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">123456</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;">// =&gt; &#39;12****&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u8BBE\u7F6E\u957F\u5EA6</p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#82AAFF;">mask</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">123456</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;">// =&gt; &#39;12***6&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u4FEE\u6539\u63A9\u7801\u5B57\u7B26</p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#82AAFF;">mask</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">123456</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;">// =&gt; &#39;12...6&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,22),o=[p];function t(c,r,i,d,m,u){return n(),a("div",null,o)}const C=s(e,[["render",t]]);export{D as __pageData,C as default};