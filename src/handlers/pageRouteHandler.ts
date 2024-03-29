import transform from '../transform'
import { CACHE_PAGES } from '../cache'
import { RouteHandler } from '@edgio/core/router/Router'
import { ResponseWriter, HTTP_HEADERS } from '@edgio/core'
import updateLocationResponseHeader from '../utils/updateLocationResponseHeader'

const handler: RouteHandler = async (response: ResponseWriter) => {
  const { cache, proxy, removeUpstreamResponseHeader } = response
  cache(CACHE_PAGES)
  removeUpstreamResponseHeader(HTTP_HEADERS.setCookie);
  removeUpstreamResponseHeader('content-security-policy')
  removeUpstreamResponseHeader('content-security-policy-report-only')
  removeUpstreamResponseHeader('strict-transport-security')
  removeUpstreamResponseHeader('pragma')
  updateLocationResponseHeader(response, /https?:\/\/(www\.)?(petsmart)\.com\//gi)
  proxy('origin', { transformResponse: transform })
}

export default handler
