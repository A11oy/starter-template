import { CheerioAPI } from 'cheerio'

export default ($: CheerioAPI) => {
  const $body = $('html body').first()
  const $head = $('html head').first()
  $('head script:contains("dataLayer =")').remove()
  $('script:contains("window.Constants")').remove()
  $('script:contains("window.User")').remove()
  $('script:contains("FS.identify")').remove()
  $('script:contains("function pollElement")').remove()
  $('script:contains("let appliedSsVariations")').remove()
  $('script.__ss_csf_data').remove()
  $('script:contains("og_settings")').remove()
  $('script:contains("var digitalData")').remove()
  $('script:contains("function waitForGA")').remove()
  $('style:contains("#brand-content ")').remove()
  $('script:contains("adoption-count")').remove()
  $('script[src*="/js/custom.js"]').remove()
  $('script[src*="www.googletagmanager.com/gtm.js"]').append($body)

  // append lateloading script
  $($head).prepend(`
  <script id="layer0_test" type="text/javascript">
    (async () => {
      console.log('lateloading script start')
      let originalPageResponse = await fetch(window.location.pathname, {
        headers: {
          lateload: 'true'
        }
      }).catch((error) => console.error(error))
      if (!originalPageResponse) {
        return
      }
      let originalPageData = await originalPageResponse.text()

      const domParser = new window.DOMParser()
      const pageDocument = domParser.parseFromString(originalPageData, 'text/html')

      function loadScriptData (content) {
        let range = document.createRange();
        range.selectNode(document.head)
        const fragment = range.createContextualFragment(content)
        console.log('loadScriptData -->', content)
        document.head.appendChild(fragment)
      }

      // Script with Constants script
      const contantsXpath = '//script[contains(text(), "window.Constants")]'
      const contantsScript = pageDocument.evaluate(contantsXpath, pageDocument, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
      if (contantsScript) {
        loadScriptData((contantsScript).outerHTML)
      }

      // Window User script
      const userScriptXpath = '//script[contains(text(), "window.User")]'
      const userScript = pageDocument.evaluate(userScriptXpath, pageDocument, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
      if (userScript) {
        loadScriptData((userScript).outerHTML)
      }

      // FS script
      const fsXpath = '//script[contains(text(), "FS.identify(")]'
      const fsScript = pageDocument.evaluate(fsXpath, pageDocument, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
      if (fsScript) {
        loadScriptData((fsScript).outerHTML)
      }

      // pollElement script
      const pollElementXpath = '//script[contains(text(), "function pollElement(")]'
      const pollElementScript = pageDocument.evaluate(pollElementXpath, pageDocument, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
      if (pollElementScript) {
        loadScriptData((pollElementScript).outerHTML)
      }

      // appliedSsVariations script
      const appliedSsVariationsXpath = '//script[contains(text(), "let appliedSsVariations")]'
      const appliedSsVariationsScript = pageDocument.evaluate(appliedSsVariationsXpath, pageDocument, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
      if (appliedSsVariationsScript) {
        loadScriptData((appliedSsVariationsScript).outerHTML)
      }

      // __ss_csf_data script
      const ssCsfDataXpath = '//script[@class="__ss_csf_data"]'
      const ssCsfDataScript = pageDocument.evaluate(ssCsfDataXpath, pageDocument, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
      if (ssCsfDataScript) {
        loadScriptData((ssCsfDataScript).outerHTML)
      }


      // facebook script
      const fbXpath = '//script[contains(text(), "og_settings")]'
      const fbScript = pageDocument.evaluate(fbXpath, pageDocument, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
      if (fbScript) {
        loadScriptData((fbScript).outerHTML)
      }

      // digitalData script
      const digitalDataXpath = '//script[contains(text(), "var digitalData")]'
      const digitalDataScript = pageDocument.evaluate(digitalDataXpath, pageDocument, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
      if (digitalDataScript) {
        loadScriptData((digitalDataScript).outerHTML)
      }

      // GA script
      const gaXpath = '//script[contains(text(), "function waitForGA(")]'
      const gaScript = pageDocument.evaluate(gaXpath, pageDocument, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
      if (gaScript) {
        loadScriptData((gaScript).outerHTML)
      }

      // brand-content inline style
      const brandContentStyleXpath = '//style[contains(text(), "#brand-content {")]'
      const brandContentStyleScript = pageDocument.evaluate(brandContentStyleXpath, pageDocument, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
      if (brandContentStyleScript) {
        loadScriptData((brandContentStyleScript).outerHTML)
      }
      console.log('lateloading script end')
    })()
  </script>
  `)
}
