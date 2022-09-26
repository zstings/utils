import{_ as s,c as a,o as n,a as l}from"./app.8e59952b.js";const D=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"days \u{1F389} \u{1F4AF}","slug":"days","link":"#days","children":[]}],"relativePath":"days.md"}'),p={name:"days.md"},e=l(`<h2 id="days" tabindex="-1">days \u{1F389} \u{1F4AF} <a class="header-anchor" href="#days" aria-hidden="true">#</a></h2><p>\u83B7\u53D6\u65F6\u95F4\u5BF9\u8C61</p><h4 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h4><ul><li><strong>time</strong> <code>string | number | Date | (string | number)[] = ...</code> \u65F6\u95F4\u6233|\u683C\u5F0F\u5316\u540E\u7684\u65F6\u95F4\u5B57\u7B26|\u65F6\u95F4\u5BF9\u8C61|\u53EF\u8F6C\u5316\u7684\u65F6\u95F4\u6570\u7EC4</li></ul><h4 id="td-ts" tabindex="-1">td.ts <a class="header-anchor" href="#td-ts" aria-hidden="true">#</a></h4><div class="info custom-block"><p class="custom-block-title">INFO</p><p><code>days(time?: string | number | Date | (string | number)[]): Date</code></p></div><h4 id="\u8FD4\u56DE" tabindex="-1">\u8FD4\u56DE <a class="header-anchor" href="#\u8FD4\u56DE" aria-hidden="true">#</a></h4><ul><li><code>Date</code></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u65F6\u95F4\u5BF9\u8C61</p></div><h4 id="\u5F02\u5E38" tabindex="-1">\u5F02\u5E38 <a class="header-anchor" href="#\u5F02\u5E38" aria-hidden="true">#</a></h4><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>Invalid Date \u4F20\u5165\u503C\u65E0\u6CD5\u8F6C\u4E3ADate\u65F6\u89E6\u53D1</p></div><h4 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h4><p>\u83B7\u53D6\u5F53\u524D\u7684\u65F6\u95F4\u5BF9\u8C61</p><div class="language-ts line-numbers-mode"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">days</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#676E95;">// =&gt; Mon Aug 29 2022 17:56:41 GMT+0800 (\u4E2D\u56FD\u6807\u51C6\u65F6\u95F4)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u652F\u6301\u65F6\u95F4\u6233</p><div class="language-ts line-numbers-mode"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">days</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1318781876406</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;">// =&gt; Mon Oct 17 2011 00:17:56 GMT+0800 (\u4E2D\u56FD\u6807\u51C6\u65F6\u95F4)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u652F\u6301\u683C\u5F0F\u5316\u7684\u65F6\u95F4\u5B57\u7B26</p><div class="language-ts line-numbers-mode"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">days</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2018-04-04T16:00:00.000Z</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;">// =&gt; Thu Apr 05 2018 00:00:00 GMT+0800 (\u4E2D\u56FD\u6807\u51C6\u65F6\u95F4)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">days</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2022-12-12</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;">// =&gt; Mon Dec 12 2022 08:00:00 GMT+0800 (\u4E2D\u56FD\u6807\u51C6\u65F6\u95F4)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">days</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2022-12-12 23:45</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;">// =&gt; Mon Dec 12 2022 23:45:00 GMT+0800 (\u4E2D\u56FD\u6807\u51C6\u65F6\u95F4)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u652F\u6301Date\u5BF9\u8C61</p><div class="language-ts line-numbers-mode"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">days</span><span style="color:#A6ACCD;">(Date</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">now</span><span style="color:#A6ACCD;">())</span></span>
<span class="line"><span style="color:#676E95;">// =&gt; days:1 Mon Aug 29 2022 18:02:32 GMT+0800 (\u4E2D\u56FD\u6807\u51C6\u65F6\u95F4)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u53EF\u8F6C\u5316\u7684\u65F6\u95F4\u6570\u7EC4, \u6210\u5458\u4F9D\u6B21\u4E3A\u5E74\u3001\u6708\u3001\u65E5\u3001\u65F6\u3001\u5206\u3001\u79D2, \u53EF\u4EE5\u662F\u6570\u7EC4\u6216\u8005\u5B57\u7B26\u4E32</p><div class="language-ts line-numbers-mode"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">days</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">2018</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">15</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">19</span><span style="color:#A6ACCD;">])</span></span>
<span class="line"><span style="color:#676E95;">// =&gt; Fri Sep 30 2022 10:10:10 GMT+0800 (\u4E2D\u56FD\u6807\u51C6\u65F6\u95F4)</span></span>
<span class="line"><span style="color:#82AAFF;">days</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">2018</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">15</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">19</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">])</span></span>
<span class="line"><span style="color:#676E95;">// \u53EF\u4EE5\u662F\u5B57\u7B26\u4E32</span></span>
<span class="line"><span style="color:#676E95;">// =&gt; Fri Sep 30 2022 10:10:10 GMT+0800 (\u4E2D\u56FD\u6807\u51C6\u65F6\u95F4)</span></span>
<span class="line"><span style="color:#82AAFF;">days</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">2018</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7</span><span style="color:#A6ACCD;">])</span></span>
<span class="line"><span style="color:#676E95;">// \u53EF\u4EE5\u51CF\u5C11\u6210\u5458</span></span>
<span class="line"><span style="color:#676E95;">// =&gt; Fri Sep 30 2022 00:00:00 GMT+0800 (\u4E2D\u56FD\u6807\u51C6\u65F6\u95F4)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u5BF9\u4E8E\u975E0\u7684falsey\u503C\uFF0C\u7B49\u540C\u4E8E new Date()</p><div class="language-ts line-numbers-mode"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">days</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">days</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#82AAFF;">days</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">undefined</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">days</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#82AAFF;">days</span><span style="color:#A6ACCD;">(</span><span style="color:#FF9CAC;">false</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">days</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#82AAFF;">days</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">days</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u4F20\u5165\u53C2\u6570\u65E0\u6CD5\u8F6C\u6362\u4E3A\u65F6\u95F4\u5BF9\u8C61\u4F1A\u62A5\u9519</p><div class="language-ts line-numbers-mode"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">days</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">aaa</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;">// throw &#39;Invalid Date&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,26),o=[e];function c(r,t,i,y,d,A){return n(),a("div",null,o)}const F=s(p,[["render",c]]);export{D as __pageData,F as default};