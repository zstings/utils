import{_ as s,c as a,o as e,a as n}from"./app.8e59952b.js";const D=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"getUrlQuery \u{1F389} \u{1F4AF}","slug":"geturlquery","link":"#geturlquery","children":[]}],"relativePath":"getUrlQuery.md"}'),l={name:"getUrlQuery.md"},r=n(`<h2 id="geturlquery" tabindex="-1">getUrlQuery \u{1F389} \u{1F4AF} <a class="header-anchor" href="#geturlquery" aria-hidden="true">#</a></h2><p>\u83B7\u53D6url\u4E0A\u7684\u53C2\u6570</p><h4 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h4><ul><li><strong>url</strong> <code>Location | URL = window.location</code></li></ul><h4 id="td-ts" tabindex="-1">td.ts <a class="header-anchor" href="#td-ts" aria-hidden="true">#</a></h4><div class="info custom-block"><p class="custom-block-title">INFO</p><p><code>getUrlQuery(url?: Location | URL): { [k: string]: T }</code></p></div><h4 id="\u8FD4\u56DE" tabindex="-1">\u8FD4\u56DE <a class="header-anchor" href="#\u8FD4\u56DE" aria-hidden="true">#</a></h4><ul><li><code>\u6620\u5C04</code></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u7531\u53C2\u6570\u7EC4\u6210\u7684\u5BF9\u8C61</p></div><h4 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h4><p>\u652F\u6301search\u548Chash\u4E2D\u53D6\u503C\uFF0C\u5982\u679Csearch\u548Chash\u4E2D\u6709\u76F8\u540C\u7684\u53C2\u6570\uFF0C\u5219\u9ED8\u8BA4\u4F7F\u7528search\u3002</p><p>\u4E0D\u4F20\u503C\u65F6\uFF0C\u9ED8\u8BA4\u4ECEwindow.location\u4E2D\u53D6\u503C</p><div class="language-ts line-numbers-mode"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">getUrlQuery</span><span style="color:#A6ACCD;">() </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">id</span><span style="color:#F07178;">\uFF1A</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#FFCB6B;">b</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">33</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;">// =&gt; window.location: https://a.b.com/?id=a&amp;b=33</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u4ECE\u7B2C\u4E8C\u4E2A\u53C2\u6570\u7684url\u4E0A\u53D6\u503C</p><div class="language-ts line-numbers-mode"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">getUrlQuery</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://a.b.com/?id=b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;">// =&gt; {id: &#39;b&#39;}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,15),t=[r];function o(p,c,i,d,u,h){return e(),a("div",null,t)}const b=s(l,[["render",o]]);export{D as __pageData,b as default};