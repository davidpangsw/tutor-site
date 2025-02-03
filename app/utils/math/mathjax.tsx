import { MathJax } from "better-react-mathjax"


export function inline(s: string) {
  return <MathJax inline={true}>\({s}\)</MathJax>
}
export function block(s: string) {
  return <MathJax>\({s}\)</MathJax>
}