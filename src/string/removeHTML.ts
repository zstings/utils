/**
 * 移除字符串中的html标签
 * @param str 传入参数, 如果参数不是字符串，会先调用toString方法
 * @return 字符串
 * @category 字符串String
 * @example
 * ```ts
 * removeHTML('<p>这是<em>一个</em>段落。</p>') // => 这是一个段落。
 * ```
 * @example
 * 转义符也会被去除
 * ```ts
 * removeHTML('<p>这是<em>一个</em>段落。&nbsp;</p>') // => 这是一个段落。
 * ```
 * @example
 * 参数不是字符串，会先调用toString方法
 * ```ts
 * removeHTML(true) // 'true'
 * ```
 */
export default function removeHTML(str: any): string {
  const escapeReg =
    /&(lt|gt|le|ge|nbsp|amp|quot|times|Alpha|Beta|Gamma|Delta|Epsilon|Zeta|Eta|Theta|Iota|Kappa|Lambda|MU|NU|Xi|Omicron|Pi|Rho|Sigma|Tau|Upsilon|Phi|Chi|Psi|Omega|alpha|beta|gamma|delta|epsilon|zeta|eta|theta|iota|kappa|lambda|mu|nu|xi|omicron|pi|rho|sigmaf|sigma|tau|upsilon|phi|chi|psi|omega|thetasym|upsih|piv|circ|tilde|ndash|permil|lsquo|rsquo|ldquo|rdquo|prime);/gi
  return str.toString()
    .replace(/<[^>]+>/g, '')
    .replace(escapeReg, '')
    .trim()
}