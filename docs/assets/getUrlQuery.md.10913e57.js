import{_ as s,c as a,o as l,a as n}from"./app.3178ba65.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"getUrlQuery \u{1F389} \u{1F4AF}","slug":"geturlquery","link":"#geturlquery","children":[]}],"relativePath":"getUrlQuery.md"}'),e={name:"getUrlQuery.md"},o=n(`<h2 id="geturlquery" tabindex="-1">getUrlQuery \u{1F389} \u{1F4AF} <a class="header-anchor" href="#geturlquery" aria-hidden="true">#</a></h2><p>\u83B7\u53D6url\u4E0A\u7684\u53C2\u6570</p><h4 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h4><ul><li><p><strong>option</strong> <code>{ \xA0\xA0\xA0\xA0type?: &quot;search&quot; | &quot;hash&quot; | &quot;all&quot;; \xA0\xA0\xA0\xA0url?: string; } = ...</code> \u53EF\u9009\u7684\u5BF9\u8C61</p><ul><li><p><strong>type?</strong> <code>&quot;search&quot; | &quot;hash&quot; | &quot;all&quot;</code> \u7C7B\u578B\uFF0C\u9ED8\u8BA4all\uFF0C \u975E\u5FC5\u586B, \u53EF\u9009\u503C\uFF1Aall, query, hash</p></li><li><p><strong>url?</strong> <code>string</code> url\u5730\u5740\uFF0C\u9ED8\u8BA4window.location.href\uFF0C \u975E\u5FC5\u586B</p></li></ul></li></ul><h4 id="td-ts" tabindex="-1">td.ts <a class="header-anchor" href="#td-ts" aria-hidden="true">#</a></h4><div class="info custom-block"><p class="custom-block-title">INFO</p><p><code>getUrlQuery(option?: { \xA0\xA0\xA0\xA0type?: &quot;search&quot; | &quot;hash&quot; | &quot;all&quot;; \xA0\xA0\xA0\xA0url?: string; }): { \xA0\xA0\xA0\xA0[k: string]: any; }</code></p></div><h4 id="\u5F02\u5E38" tabindex="-1">\u5F02\u5E38 <a class="header-anchor" href="#\u5F02\u5E38" aria-hidden="true">#</a></h4><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>\u53C2\u6570\u9519\u8BEF\uFF0C \u5E94\u8BE5\u4F20\u5165\u4E00\u4E2A\u5BF9\u8C61 option\u4E0D\u662F\u5BF9\u8C61\u65F6\u89E6\u53D1</p></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>url\u53C2\u6570\u9519\u8BEF\uFF0C\u4E0D\u662F\u6709\u6548\u7684 url\u4E0D\u662F\u6709\u6548\u94FE\u63A5\u65F6\u89E6\u53D1</p></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>type \u53C2\u6570\u9519\u8BEF\uFF0C \u5E94\u8BE5\u4F20\u5165\u4E00\u4E2A\u5B57\u7B26\u4E32 &#39;search&#39; | &#39;hash&#39; | &#39;all&#39;</p></div><h4 id="\u8FD4\u56DE" tabindex="-1">\u8FD4\u56DE <a class="header-anchor" href="#\u8FD4\u56DE" aria-hidden="true">#</a></h4><ul><li><code>\u6620\u5C04</code></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u7531\u53C2\u6570\u7EC4\u6210\u7684\u5BF9\u8C61</p></div><h4 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h4><p>\u652F\u6301search\u548Chash\u4E2D\u53D6\u503C\uFF0C\u5982\u679Csearch\u548Chash\u4E2D\u6709\u76F8\u540C\u7684\u53C2\u6570\uFF0C\u5219\u9ED8\u8BA4\u4F7F\u7528search\u3002</p><p>\u4E0D\u4F20\u503C\u65F6\uFF0C\u9ED8\u8BA4\u4ECEwindow.location.href\u4E2D\u53D6\u503C</p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#82AAFF;">getUrlQuery</span><span style="color:#A6ACCD;">() </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;">\uFF1A</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#FFCB6B;">b</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;">// =&gt; window.location.href: https://a.b.com/?a=1&amp;b=2</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u4ECE\u53C2\u6570\u7684url\u4E0A\u53D6\u503C</p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#82AAFF;">getUrlQuery</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">url</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">http://a.b.com/?a=1&amp;b=2#/index/?c=3&amp;b=4</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;">// =&gt; {a: &#39;1&#39;, b: &#39;2&#39;, c: &#39;3&#39;}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u4ECE\u53C2\u6570\u7684url\u4E0A\u53D6\u503C,\u53EA\u5728search\u4E2D\u53D6\u503C</p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#82AAFF;">getUrlQuery</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">url</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">http://a.b.com/?a=1&amp;b=2#/index/?c=3&amp;b=4</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">search</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;">// =&gt; {id: &#39;1&#39;, b: &#39;2&#39;}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u4ECE\u53C2\u6570\u7684url\u4E0A\u53D6\u503C,\u53EA\u5728hash\u4E2D\u53D6\u503C</p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#82AAFF;">getUrlQuery</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">url</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">http://a.b.com/?a=1&amp;b=2#/index/?c=3&amp;b=4</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hash</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;">// =&gt; {c: &#39;3&#39;, b: &#39;4&#39;}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,23),p=[o];function t(r,c,i,d,u,y){return l(),a("div",null,p)}const F=s(e,[["render",t]]);export{h as __pageData,F as default};