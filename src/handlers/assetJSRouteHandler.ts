import { CACHE_ASSETS_JS } from '../cache'
import { RouteHandler } from '@edgio/core/router/Router'
import { ResponseWriter } from '@edgio/core'
import updateLocationResponseHeader from '../utils/updateLocationResponseHeader'

const handler: RouteHandler = async (response: ResponseWriter) => {
  const { cache, proxy, removeUpstreamResponseHeader } = response
  cache(CACHE_ASSETS_JS)
  removeUpstreamResponseHeader('content-security-policy')
  removeUpstreamResponseHeader('content-security-policy-report-only')
  removeUpstreamResponseHeader('strict-transport-security')
  removeUpstreamResponseHeader('pragma')
  updateLocationResponseHeader(response, /https?:\/\/(www\.)?(petsmart)\.com\//gi)
  proxy('origin')
}

export default handler
