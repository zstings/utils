import{_ as s,c as a,o as n,O as l}from"./chunks/framework.d7e37bdc.js";const D=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"day.md","filePath":"day.md"}'),p={name:"day.md"},e=l(`<h2 id="day" tabindex="-1">day 🎉 💯 <a class="header-anchor" href="#day" aria-label="Permalink to &quot;day :tada: :100:&quot;">​</a></h2><p>获取时间对象</p><h4 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h4><ul><li><strong>time</strong> <code>string | number | Date | (string | number)[] = ...</code> 时间戳|格式化后的时间字符|时间对象|可转化的时间数组</li></ul><h4 id="td-ts" tabindex="-1">td.ts <a class="header-anchor" href="#td-ts" aria-label="Permalink to &quot;td.ts&quot;">​</a></h4><div class="info custom-block"><p class="custom-block-title">INFO</p><p><code>day(time?: string | number | Date | (string | number)[]): Date</code></p></div><h4 id="返回" tabindex="-1">返回 <a class="header-anchor" href="#返回" aria-label="Permalink to &quot;返回&quot;">​</a></h4><ul><li><code>Date</code></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>时间对象</p></div><h4 id="异常" tabindex="-1">异常 <a class="header-anchor" href="#异常" aria-label="Permalink to &quot;异常&quot;">​</a></h4><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>Invalid Date 传入值无法转为Date时触发</p></div><h4 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-label="Permalink to &quot;实例&quot;">​</a></h4><p>获取当前的时间对象</p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">day</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// =&gt; Mon Aug 29 2022 17:56:41 GMT+0800 (中国标准时间)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>支持时间戳</p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">day</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1318781876406</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// =&gt; Mon Oct 17 2011 00:17:56 GMT+0800 (中国标准时间)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>支持格式化的时间字符</p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">day</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2018-04-04T16:00:00.000Z</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// =&gt; Thu Apr 05 2018 00:00:00 GMT+0800 (中国标准时间)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">day</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2022-12-12</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// =&gt; Mon Dec 12 2022 08:00:00 GMT+0800 (中国标准时间)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">day</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2022-12-12 23:45</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// =&gt; Mon Dec 12 2022 23:45:00 GMT+0800 (中国标准时间)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>支持Date对象</p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">day</span><span style="color:#A6ACCD;">(Date</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">now</span><span style="color:#A6ACCD;">())</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// =&gt; day:1 Mon Aug 29 2022 18:02:32 GMT+0800 (中国标准时间)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>可转化的时间数组, 成员依次为年、月、日、时、分、秒, 可以是数组或者字符串</p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">day</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">2018</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">15</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">19</span><span style="color:#A6ACCD;">])</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// =&gt; Fri Sep 30 2022 10:10:10 GMT+0800 (中国标准时间)</span></span>
<span class="line"><span style="color:#82AAFF;">day</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">2018</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">15</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">19</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">])</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 可以是字符串</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// =&gt; Fri Sep 30 2022 10:10:10 GMT+0800 (中国标准时间)</span></span>
<span class="line"><span style="color:#82AAFF;">day</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">2018</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7</span><span style="color:#A6ACCD;">])</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 可以减少成员</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// =&gt; Fri Sep 30 2022 00:00:00 GMT+0800 (中国标准时间)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>对于非0的falsey值，等同于 new Date()</p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">day</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">day</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#82AAFF;">day</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">undefined</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">day</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#82AAFF;">day</span><span style="color:#A6ACCD;">(</span><span style="color:#FF9CAC;">false</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">day</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#82AAFF;">day</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">day</span><span style="color:#A6ACCD;">()</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>传入参数无法转换为时间对象会报错</p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">day</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">aaa</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// throw &#39;Invalid Date&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,26),o=[e];function t(r,c,i,y,d,C){return n(),a("div",null,o)}const F=s(p,[["render",t]]);export{D as __pageData,F as default};
