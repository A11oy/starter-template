import { CACHE_ASSETS_MEDIA } from '../cache'
import { RouteHandler } from '@edgio/core/router/Router'
import { ResponseWriter, HTTP_HEADERS } from '@edgio/core'
import updateLocationResponseHeader from '../utils/updateLocationResponseHeader'

const handler: RouteHandler = async (response: ResponseWriter) => {
  const { cache, proxy, removeUpstreamResponseHeader } = response
  cache(CACHE_ASSETS_MEDIA)
  removeUpstreamResponseHeader(HTTP_HEADERS.setCookie);
  updateLocationResponseHeader(response, /https?:\/\/(www\.)?(petsmart)\.com\//gi)
  proxy('origin')
}

export default handler
