import installDevtools from '@edgio/devtools/install'
import loadPersonalizedHTML from './utils/browser/loadPersonalizedHTML'
import loadScriptsWithPersonalizedData from './utils/browser/loadScriptsWithPersonalizedData'

/** START Late loading **/
let redirectCount = 0;
const REDIRECT_LIMIT = 10;

const fetchUrl = async (urlObject: URL | Location): Promise<Response> => {
  const url = `${urlObject.pathname}${urlObject.search || ''}`
  const noCacheUrl = `/no-cache-proxy${url}`
  const response = await fetch(noCacheUrl,
    // {
    // credentials: 'include',
    // redirect: 'follow',
    // }
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
    loadScriptsWithPersonalizedData(pageDoc)
    loadPersonalizedHTML(pageDoc)
  }
}

main()
  .catch((error) => {
    console.error(error)
  })
/** !END Late loading **/
