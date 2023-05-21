import { NO_CACHE } from '../cache'
import updateLocationResponseHeader from '../utils/updateLocationResponseHeader'
import { ResponseWriter } from '@edgio/core'

const noCacheRouteHandler = (response: ResponseWriter, path: string) => {
  const { cache, proxy } = response
  cache(NO_CACHE)
  updateLocationResponseHeader(response, /https?:\/\/(www\.)?(petsmart)\.com\//gi)
  return proxy('origin', { path })
};

export default noCacheRouteHandler;
