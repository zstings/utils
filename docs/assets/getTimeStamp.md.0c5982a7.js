import{_ as s,c as a,o as e,a as n}from"./app.a1534748.js";const h=JSON.parse('{"title":"getTimeStamp \u{1F389} \u{1F4AF}","description":"","frontmatter":{},"headers":[{"level":2,"title":"getTimeStamp \u{1F389} \u{1F4AF}","slug":"gettimestamp-tada-100"}],"relativePath":"getTimeStamp.md"}'),p={name:"getTimeStamp.md"},l=n(`<h2 id="gettimestamp-tada-100" tabindex="-1">getTimeStamp \u{1F389} \u{1F4AF} <a class="header-anchor" href="#gettimestamp-tada-100" aria-hidden="true">#</a></h2><p>\u83B7\u53D6\u65F6\u95F4\u6233</p><h4 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h4><ul><li><p>value? <code>string | Date</code> \u65F6\u95F4\u5BF9\u8C61\u6216\u8005\u683C\u5F0F\u5316\u540E\u7684\u65F6\u95F4</p></li><li><p>unit? <code>&quot;ms&quot; | &quot;s&quot;</code> \u8FD4\u56DE\u683C\u5F0F,\u652F\u6301\u6BEB\u79D2\u6216\u8005\u79D2,\u9ED8\u8BA4\u6BEB\u79D2</p></li></ul><h4 id="td-ts" tabindex="-1">td.ts <a class="header-anchor" href="#td-ts" aria-hidden="true">#</a></h4><div class="info custom-block"><p class="custom-block-title">INFO</p><p><code>getTimeStamp(value?: string | Date, unit?: &quot;ms&quot; | &quot;s&quot;): number</code></p></div><h4 id="\u8FD4\u56DE" tabindex="-1">\u8FD4\u56DE <a class="header-anchor" href="#\u8FD4\u56DE" aria-hidden="true">#</a></h4><ul><li><code>number</code></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u65F6\u95F4\u6233</p></div><h4 id="\u5F02\u5E38" tabindex="-1">\u5F02\u5E38 <a class="header-anchor" href="#\u5F02\u5E38" aria-hidden="true">#</a></h4><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>Invalid Date \u4F20\u5165\u503C\u65E0\u6CD5\u8F6C\u4E3ADate\u65F6\u89E6\u53D1</p></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>\u53C2\u6570\u9519\u8BEF \u4F20\u5165\u503C\u4E0D\u662F\u5B57\u7B26\u4E32\u6216\u8005Date\u65F6\u89E6\u53D1</p></div><h4 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h4><p>\u83B7\u53D6\u5F53\u524D\u7684\u65F6\u95F4\u6233</p><div class="language-ts line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#82AAFF;">getTimeStamp</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// 1659334598129</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u83B7\u53D6\u5F53\u524D\u7684\u65F6\u95F4\u6233\uFF0C\u5355\u4F4D\u79D2(s)</p><div class="language-ts line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#82AAFF;">getTimeStamp</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">s</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// 1659334598129</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u83B7\u53D6 2022-10-12 \u7684\u65F6\u95F4\u6233</p><div class="language-ts line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#82AAFF;">getTimeStamp</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2022-10-12</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// 1665504000000</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u83B7\u53D6 2022-10-12 \u7684\u65F6\u95F4\u6233, \u4EE5\u79D2\u8FD4\u56DE</p><div class="language-ts line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#82AAFF;">getTimeStamp</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2022-10-12</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">s</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// 1665504000</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,21),t=[l];function o(c,i,r,d,m,u){return e(),a("div",null,t)}var y=s(p,[["render",o]]);export{h as __pageData,y as default};
