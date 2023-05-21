import appendRawHtmlToHead from './appendRawHtmlToHead'
import get from 'lodash/get'

declare const Redux: any

export default (doc: Document) => {
  // Google Tag Manager
  const gtmXpath = '//script[contains(text(), "dlLayer")]'
  const gtmScript = doc.evaluate(gtmXpath, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (gtmScript) {
    appendRawHtmlToHead((<Element>gtmScript).outerHTML)
  }

  // Data Layer script
  const dataLayerXpath = '//script[contains(text(), "dataLayer =")]'
  const dataLayerScript = doc.evaluate(dataLayerXpath, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (dataLayerScript) {
    appendRawHtmlToHead((<Element>dataLayerScript).outerHTML)
  }

  // Script with Constants script
  const contantsXpath = '//script[contains(text(), "window.Constants")]'
  const contantsScript = doc.evaluate(contantsXpath, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (contantsScript) {
    appendRawHtmlToHead((<Element>contantsScript).outerHTML)
  }

  // Window User script
  const userScriptXpath = '//script[contains(text(), "window.User")]'
  const userScript = doc.evaluate(userScriptXpath, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (userScript) {
    appendRawHtmlToHead((<Element>userScript).outerHTML)
  }

  // FS script
  const fsXpath = '//script[contains(text(), "FS.identify(")]'
  const fsScript = doc.evaluate(fsXpath, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (fsScript) {
    appendRawHtmlToHead((<Element>fsScript).outerHTML)
  }

  // pollElement script
  const pollElementXpath = '//script[contains(text(), "function pollElement(")]'
  const pollElementScript = doc.evaluate(pollElementXpath, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (pollElementScript) {
    appendRawHtmlToHead((<Element>pollElementScript).outerHTML)
  }

  // appliedSsVariations script
  const appliedSsVariationsXpath = '//script[contains(text(), "let appliedSsVariations")]'
  const appliedSsVariationsScript = doc.evaluate(appliedSsVariationsXpath, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (appliedSsVariationsScript) {
    appendRawHtmlToHead((<Element>appliedSsVariationsScript).outerHTML)
  }

  // __ss_csf_data script
  const ssCsfDataXpath = '//script[@class="__ss_csf_data"]'
  const ssCsfDataScript = doc.evaluate(ssCsfDataXpath, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (ssCsfDataScript) {
    appendRawHtmlToHead((<Element>ssCsfDataScript).outerHTML)
  }


  // facebook script
  const fbXpath = '//script[contains(text(), "og_settings")]'
  const fbScript = doc.evaluate(fbXpath, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (fbScript) {
    appendRawHtmlToHead((<Element>fbScript).outerHTML)
  }

  // digitalData script
  const digitalDataXpath = '//script[contains(text(), "var digitalData")]'
  const digitalDataScript = doc.evaluate(digitalDataXpath, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (digitalDataScript) {
    appendRawHtmlToHead((<Element>digitalDataScript).outerHTML)
  }

  // GA script
  const gaXpath = '//script[contains(text(), "function waitForGA(")]'
  const gaScript = doc.evaluate(gaXpath, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (gaScript) {
    appendRawHtmlToHead((<Element>gaScript).outerHTML)
  }

  // brand-content inline style
  const brandContentStyleXpath = '//style[contains(text(), "#brand-content {")]'
  const brandContentStyleScript = doc.evaluate(brandContentStyleXpath, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (brandContentStyleScript) {
    appendRawHtmlToHead((<Element>brandContentStyleScript).outerHTML)
  }

}
