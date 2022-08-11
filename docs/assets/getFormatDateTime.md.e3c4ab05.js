import{_ as a,c as s,o as e,a as n}from"./app.b362c108.js";const y=JSON.parse('{"title":"getFormatDateTime \u{1F389} \u{1F4AF}","description":"","frontmatter":{},"headers":[{"level":2,"title":"getFormatDateTime \u{1F389} \u{1F4AF}","slug":"getformatdatetime-tada-100"}],"relativePath":"getFormatDateTime.md"}'),t={name:"getFormatDateTime.md"},l=n(`<h2 id="getformatdatetime-tada-100" tabindex="-1">getFormatDateTime \u{1F389} \u{1F4AF} <a class="header-anchor" href="#getformatdatetime-tada-100" aria-hidden="true">#</a></h2><p>\u83B7\u53D6\u6307\u5B9A\u683C\u5F0F\u7684\u65F6\u95F4</p><h4 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h4><ul><li><p>value? <code>number | Date</code> \u65F6\u95F4\u5BF9\u8C61\u6216\u8005\u65F6\u95F4\u6233</p></li><li><p>format? <code>string</code> \u8FD4\u56DE\u683C\u5F0F \u9ED8\u8BA4 YYYY-MM-DD hh:mm:ss</p></li></ul><h4 id="td-ts" tabindex="-1">td.ts <a class="header-anchor" href="#td-ts" aria-hidden="true">#</a></h4><div class="info custom-block"><p class="custom-block-title">INFO</p><p><code>getFormatDateTime(value?: number | Date, format?: string): string</code></p></div><h4 id="\u8FD4\u56DE" tabindex="-1">\u8FD4\u56DE <a class="header-anchor" href="#\u8FD4\u56DE" aria-hidden="true">#</a></h4><ul><li><code>string</code></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u6307\u5B9A\u683C\u5F0F\u7684\u65F6\u95F4</p></div><h4 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h4><p>\u83B7\u53D6\u5F53\u524D\u7684\u65E5\u671F</p><div class="language-ts line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#82AAFF;">getFormatDateTime</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// &#39;2022-07-30 12:41:26&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u83B7\u53D6\u5F53\u524D\u65F6\u95F4\u7684\u5E74\u6708</p><div class="language-ts line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#82AAFF;">getFormatDateTime</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">Date</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">now</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">YYYY-MM</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// &#39;2022-07&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u83B7\u53D6\u5177\u4F53\u65E5\u671F\u7684\u65F6\u95F4\u683C\u5F0F</p><div class="language-ts line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> date </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Date</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2022/10/10 10:00:00</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#82AAFF;">getFormatDateTime</span><span style="color:#A6ACCD;">(date</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">YYYY-MM-DD</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// &#39;2022-10-10&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,16),o=[l];function p(r,c,i,d,D,m){return e(),s("div",null,o)}var A=a(t,[["render",p]]);export{y as __pageData,A as default};