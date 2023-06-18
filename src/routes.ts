import {CACHE_EDGIO_ASSETS} from './cache'
import { Router } from '@edgio/core/router'
import pageRouteHandler from './handlers/pageRouteHandler'
import assetJSRouteHandler from './handlers/assetJSRouteHandler'
import assetCSSRouteHandler from './handlers/assetCSSRouteHandler'
import assetMediaRouteHandler from './handlers/assetMediaRouteHandler'
import noCacheRouteHandler from './handlers/noCacheRouteHandler'
import proxyRouteHandler from './handlers/proxyRouteHandler'

/* Start Layer0 Router */
const layer0Router = new Router()

layer0Router
  .match('/:anypath*', ({ setResponseHeader }) => {
    setResponseHeader('x-matched-routes', '${req:x-0-matched-routes}')
  })

// no cache routes
  .match({
    headers: {
      lateload: /true/
    },
  }, ({ proxy }) => proxy('origin'))
  .match('/no-cache-proxy/:anypath*', (response) => noCacheRouteHandler(response, '/:anypath*'))

// other Edgio rotes
layer0Router
  .match('/__edgio__/main.js', ({ serveStatic, cache }) => {
    cache(CACHE_EDGIO_ASSETS)
    serveStatic('dist/browser.js')
  })
  .match('/', pageRouteHandler)
  .match('/dog/food/dry-food/royal-canin/', pageRouteHandler)
  .match('/dog/food/dry-food/:path*-(\\d+).html', pageRouteHandler)

// Home page

// Search
layer0Router
  .match({
    path: '/search',
    cookies: {
      l0_willRedirect: 'false'
    }
  }, pageRouteHandler)

// JS assets with browser cache
layer0Router
  .match('/:path*/:file.:ext(js|mjs)', assetJSRouteHandler)

// CSS assets with edge cache
layer0Router
  .match('/:path*/:file.css', assetCSSRouteHandler)

// Images, fonts, etc. with edge cache
layer0Router
  .match(
    '/:path*/:file.:ext(png|ico|svg|jpg|jpeg|gif|ttf|woff|woff2|otf|webp)',
    assetMediaRouteHandler
  )

  // otherwise fallback
  .fallback(proxyRouteHandler)
/* End Layer0 Router */

/* Start Legacy Router */
const legacyRouter = new Router()

legacyRouter
  .match('/:anypath*', ({ setResponseHeader }) => {
    setResponseHeader('x-matched-routes', '${req:x-0-matched-routes}')
  })
  // otherwise fallback
  .fallback(proxyRouteHandler)

/* End Legacy Router */

const router = new Router()
  .destination('Layer0Traditional', layer0Router)
  .destination('passthrough', legacyRouter);

export default router
