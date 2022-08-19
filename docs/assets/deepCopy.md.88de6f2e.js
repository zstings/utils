import{_ as s,c as a,o as e,a as n}from"./app.806deb77.js";const D=JSON.parse('{"title":"deepCopy \u{1F389} \u{1F4AF}","description":"","frontmatter":{},"headers":[{"level":2,"title":"deepCopy \u{1F389} \u{1F4AF}","slug":"deepcopy"}],"relativePath":"deepCopy.md"}'),p={name:"deepCopy.md"},o=n(`<h2 id="deepcopy" tabindex="-1">deepCopy \u{1F389} \u{1F4AF} <a class="header-anchor" href="#deepcopy" aria-hidden="true">#</a></h2><p>\u6DF1\u5EA6\u590D\u5236</p><h4 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h4><ul><li>origin <code>ObjectData | ArrayData</code> \u5BF9\u8C61\u6216\u8005\u6570\u7EC4</li></ul><h4 id="td-ts" tabindex="-1">td.ts <a class="header-anchor" href="#td-ts" aria-hidden="true">#</a></h4><div class="info custom-block"><p class="custom-block-title">INFO</p><p><code>deepCopy(origin: ObjectData | ArrayData): ObjectData</code></p></div><h4 id="\u8FD4\u56DE" tabindex="-1">\u8FD4\u56DE <a class="header-anchor" href="#\u8FD4\u56DE" aria-hidden="true">#</a></h4><ul><li><code>ObjectData</code></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u6DF1\u5EA6\u590D\u5236\u540E\u7684\u5BF9\u8C61\u6216\u8005\u6570\u7EC4</p></div><h4 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h4><div class="language-ts line-numbers-mode"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">deepCopy</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">23</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">]]) </span><span style="color:#676E95;">// =&gt; [1,23, [1]]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-ts line-numbers-mode"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">deepCopy</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">b</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}}</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;">// =&gt; {a: [1], b: () =&gt; {}}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,12),l=[o];function t(c,r,d,i,y,C){return e(),a("div",null,l)}const A=s(p,[["render",t]]);export{D as __pageData,A as default};
