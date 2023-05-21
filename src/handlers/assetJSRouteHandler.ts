import { CACHE_ASSETS_JS } from '../cache'
import { RouteHandler } from '@edgio/core/router/Router'
import { ResponseWriter } from '@edgio/core'
import updateLocationResponseHeader from '../utils/updateLocationResponseHeader'

const handler: RouteHandler = async (response: ResponseWriter) => {
  const { cache, proxy } = response
  cache(CACHE_ASSETS_JS)
  updateLocationResponseHeader(response, /https?:\/\/(www\.)?(petsmart)\.com\//gi)
  proxy('origin')
}

export default handler
