import * as cheerio from 'cheerio'
import Request from '@edgio/core/router/Request'
import Response from '@edgio/core/router/Response'
import addEdgioScripts from './utils/addEdgioScripts'
import updateContentLength from './utils/updateContentLength'
import removeScriptsWithPersonalizedData from './utils/removeScriptsWithPersonalizedData';
import removePersonalizedHTML from './utils/removePersonalizedHTML'

export default function transform(response: Response, request: Request) {
  if (response.body) {
    const $ = cheerio.load(response.body)

    // addEdgioSkeletons($)
    addEdgioScripts($)

    // remove personalized data from page
    removeScriptsWithPersonalizedData($)
    removePersonalizedHTML($)
    $('meta[http-equiv="Content-Security-Policy"]').remove()

    let responseHTML = $.html()

    // make links relatives for localhost
    if (request.headers.host.includes('localhost')) {
      responseHTML = responseHTML.replace(/https?:\/\/(www\.)?(petsmart)\.com\//gmi, '/')
    }

    updateContentLength(response, responseHTML)
  }
}
