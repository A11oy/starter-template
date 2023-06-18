import { NO_CACHE } from '../cache'
import updateLocationResponseHeader from '../utils/updateLocationResponseHeader'
import { ResponseWriter } from '@edgio/core'

const noCacheRouteHandler = (response: ResponseWriter, path: string) => {
  const { cache, proxy, removeUpstreamResponseHeader } = response
  cache(NO_CACHE)
  removeUpstreamResponseHeader('content-security-policy')
  removeUpstreamResponseHeader('content-security-policy-report-only')
  removeUpstreamResponseHeader('strict-transport-security')
  removeUpstreamResponseHeader('pragma')
  updateLocationResponseHeader(response, /https?:\/\/(www\.)?(petsmart)\.com\//gi)
  return proxy('origin', { path })
};

export default noCacheRouteHandler;
