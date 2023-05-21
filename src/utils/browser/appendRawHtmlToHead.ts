export default (content: string) => {
  const range = document.createRange();
  range.selectNode(document.head) // required in Safari
  const fragment = range.createContextualFragment(content)
  document.head.appendChild(fragment)
}
