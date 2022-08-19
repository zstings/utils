import{_ as s,c as a,o as n,a as l}from"./app.806deb77.js";const h=JSON.parse('{"title":"getUrlParam \u{1F389} \u{1F4AF}","description":"","frontmatter":{},"headers":[{"level":2,"title":"getUrlParam \u{1F389} \u{1F4AF}","slug":"geturlparam"}],"relativePath":"getUrlParam.md"}'),e={name:"getUrlParam.md"},p=l(`<h2 id="geturlparam" tabindex="-1">getUrlParam \u{1F389} \u{1F4AF} <a class="header-anchor" href="#geturlparam" aria-hidden="true">#</a></h2><p>\u83B7\u53D6url\u4E0A\u7684\u53C2\u6570</p><h4 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h4><ul><li><p>name <code>string</code> \u53C2\u6570\u540D\uFF0C\u5FC5\u586B</p></li><li><p>url? <code>string | Location</code> url\u5730\u5740\uFF0C\u4E3A\u7A7A\u65F6\u662Fwindow.location\uFF0C \u975E\u5FC5\u586B</p></li></ul><h4 id="td-ts" tabindex="-1">td.ts <a class="header-anchor" href="#td-ts" aria-hidden="true">#</a></h4><div class="info custom-block"><p class="custom-block-title">INFO</p><p><code>getUrlParam(name: string, url?: string | Location): null | string</code></p></div><h4 id="\u8FD4\u56DE" tabindex="-1">\u8FD4\u56DE <a class="header-anchor" href="#\u8FD4\u56DE" aria-hidden="true">#</a></h4><ul><li><code>null | string</code></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u7B26\u5408\u7684\u503C\u6216\u8005null</p></div><h4 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h4><p>\u652F\u6301search\u548Chash\u4E2D\u53D6\u503C\uFF0C\u5982\u679Csearch\u548Chash\u4E2D\u6709\u76F8\u540C\u7684\u53C2\u6570\uFF0C\u5219\u9ED8\u8BA4\u4F7F\u7528search\u3002</p><p>\u4E0D\u4F20\u503C\u65F6\uFF0C\u9ED8\u8BA4\u4ECEwindow.location\u4E2D\u53D6\u503C</p><div class="language-ts line-numbers-mode"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">getUrlParam</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">id</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// window.location: https://a.b.com/?id=a</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u4ECE\u7B2C\u4E8C\u4E2A\u53C2\u6570\u7684url\u4E0A\u53D6\u503C</p><div class="language-ts line-numbers-mode"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">getUrlParam</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">id</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://a.b.com/?id=b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u5728\u7B2C\u4E8C\u4E2A\u53C2\u6570\u7684url\u4E0A\u4F18\u5148\u4ECEsearch\u4E2D\u63D0\u53D6\u503C\u3002</p><div class="language-ts line-numbers-mode"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">getUrlParam</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">id</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">http://a.b.com/?id=a#/index/?id=b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,17),o=[p];function r(t,c,i,d,D,u){return n(),a("div",null,o)}const F=s(e,[["render",r]]);export{h as __pageData,F as default};
