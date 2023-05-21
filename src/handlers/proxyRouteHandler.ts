import { NO_CACHE } from '../cache'
import { RouteHandler } from '@edgio/core/router/Router'

const proxyRouteHandler: RouteHandler = ({ cache, proxy }) => {
  cache(NO_CACHE)
  proxy('origin')
};

export default proxyRouteHandler;
