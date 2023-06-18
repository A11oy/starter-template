// import installDevtools from '@edgio/devtools/install'
import loadPersonalizedHTML from './utils/browser/loadPersonalizedHTML'
// import loadScriptsWithPersonalizedData from './utils/browser/loadScriptsWithPersonalizedData'

/** START Late loading **/

const fetchUrl = async (urlObject: URL | Location): Promise<Response> => {
  const url = `${urlObject.pathname}${urlObject.search || ''}`
  const response = await fetch(url,
    {
      headers: {
        lateload: 'true'
      }
    }
  )
  return response
}

const main = async () => {
  // installDevtools();

  // fetch no cached page with personalized data
  const response = await fetchUrl(window.location).catch((error) => console.error(error))
  if (!response) {
    return
  }
  const pageData = await response.text()
  if (pageData) {
    const domParser = new window.DOMParser()
    const pageDoc = domParser.parseFromString(pageData, 'text/html')

    // find personalized data and inject it to current page
    // loadScriptsWithPersonalizedData(pageDoc)
    loadPersonalizedHTML(pageDoc)
    const customJsScriptParsed = pageDoc.querySelector('script[src*="/js/custom.js"]')
    // console.log('load custom js', customJsScriptParsed)
    if (customJsScriptParsed) {
      const customJsScript = document.createElement('script')
      customJsScript.type = 'text/javascript'
      customJsScript.src = customJsScriptParsed.getAttribute('src') || ''
      document.body.append(customJsScript)
    }
  }
}

main()
  .catch((error) => {
    console.error(error)
  })
/** !END Late loading **/
