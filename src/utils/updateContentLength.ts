import { HTTP_HEADERS } from '@edgio/core/constants'
import Response from '@edgio/core/router/Response'

/**
 * Use this util to update response after transformation original HTML.
 * This is important to prevent content cutting in the browser.
 * Transformed HTML could have another content-length.
 * @param response
 * @param rawHTML
 */
export default function updateContentLength(response: Response, rawHTML: string) {
  const responseBuffer = Buffer.from(rawHTML, 'utf8')
  response.setHeader(HTTP_HEADERS.contentLength, responseBuffer.length)
  response.body = responseBuffer
}
