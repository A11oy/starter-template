import { CacheOptions } from '@edgio/core/router/CacheOptions'
import { CustomCacheKey } from '@edgio/core/router'

const ONE_MIN = 60
const FIVE_MIN = 5 * ONE_MIN
const TEN_MIN = 10 * ONE_MIN
const ONE_HOUR = 60 * ONE_MIN
const ONE_DAY = 24 * ONE_HOUR
const ONE_WEEK = 7 * ONE_DAY
const ONE_MONTH = 30 * ONE_DAY

const key = new CustomCacheKey().excludeQueryParameters(
  'utm_medium',
  'utm_source',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'gclid',
).addCookie('StoreCookie').addDevice()

/**
 * The default cache setting for pages
 */
export const CACHE_PAGES: CacheOptions = {
  key,
  edge: {
    maxAgeSeconds: ONE_DAY,
    forcePrivateCaching: true,
    staleWhileRevalidateSeconds: ONE_WEEK,
  },
  browser: {
    maxAgeSeconds: 0,
    serviceWorkerSeconds: TEN_MIN,
  }
}

/**
 * The default cache setting for static assets like JS
 */
export const CACHE_ASSETS_JS: CacheOptions = {
  edge: false,
  browser: {
    maxAgeSeconds: TEN_MIN,
  }
}

/**
 * The default cache setting for static assets like CSS
 */
export const CACHE_ASSETS_CSS: CacheOptions = {
  edge: {
    maxAgeSeconds: TEN_MIN,
    forcePrivateCaching: true,
    staleWhileRevalidateSeconds: ONE_DAY,
  },
  browser: {
    maxAgeSeconds: FIVE_MIN,
  }
}

/**
 * The default cache setting for static assets like images, fonts.
 */
export const CACHE_ASSETS_MEDIA: CacheOptions = {
  edge: {
    maxAgeSeconds: ONE_WEEK,
    forcePrivateCaching: true,
    staleWhileRevalidateSeconds: ONE_MONTH,
  },
  browser: {
    maxAgeSeconds: ONE_DAY,
  }
}

/**
 * Edgio assets
 */
export const CACHE_EDGIO_ASSETS: CacheOptions = {
  edge: {
    maxAgeSeconds: ONE_MONTH,
    forcePrivateCaching: true,
    staleWhileRevalidateSeconds: ONE_WEEK,
  },
  browser: {
    maxAgeSeconds: ONE_HOUR,
  },
}

/**
 * No cache
 */
export const NO_CACHE: CacheOptions = {
  edge: false
}
