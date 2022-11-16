import{_ as s,c as a,o as n,a as l}from"./app.e9f93013.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"unique \u{1F389} \u{1F4AF}","slug":"unique","link":"#unique","children":[]}],"relativePath":"unique.md"}'),o={name:"unique.md"},e=l(`<h2 id="unique" tabindex="-1">unique \u{1F389} \u{1F4AF} <a class="header-anchor" href="#unique" aria-hidden="true">#</a></h2><p>\u6570\u7EC4\u53BB\u91CD</p><h4 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h4><ul><li><p><strong>array</strong> <code>any[]</code> \u6570\u7EC4</p></li><li><p><strong>key?</strong> <code>string</code> \u6307\u5B9A\u6570\u7EC4\u5BF9\u8C61\u9700\u8981\u5BF9\u6BD4\u7684key</p></li></ul><h4 id="td-ts" tabindex="-1">td.ts <a class="header-anchor" href="#td-ts" aria-hidden="true">#</a></h4><div class="info custom-block"><p class="custom-block-title">INFO</p><p><code>unique(array: any[], key?: string): any[]</code></p></div><h4 id="\u8FD4\u56DE" tabindex="-1">\u8FD4\u56DE <a class="header-anchor" href="#\u8FD4\u56DE" aria-hidden="true">#</a></h4><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u65B0\u7684\u6570\u7EC4</p></div><h4 id="\u5F02\u5E38" tabindex="-1">\u5F02\u5E38 <a class="header-anchor" href="#\u5F02\u5E38" aria-hidden="true">#</a></h4><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>array\u53C2\u6570\u9700\u8981Array array\u53C2\u6570\u9519\u8BEF\u65F6\u89E6\u53D1</p></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>key\u53C2\u6570\u9700\u8981String key\u5B58\u5728\u4E14\u4E0D\u662F\u5B57\u7B26\u4E32\u65F6\u89E6\u53D1</p></div><h4 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h4><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#82AAFF;">unique</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">]) </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD</p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#82AAFF;">unique</span><span style="color:#A6ACCD;">([</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">id</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;">// =&gt; [{id: 1, name: &#39;1&#39;}, {id: 2, name: &#39;2&#39;}]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,15),p=[e];function t(r,c,i,y,d,D){return n(),a("div",null,p)}const u=s(o,[["render",t]]);export{C as __pageData,u as default};
