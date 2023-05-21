import { skipWaiting, clientsClaim } from 'workbox-core'
import { Prefetcher } from '@edgio/prefetch/sw'
import DeepFetchPlugin from '@edgio/prefetch/sw/DeepFetchPlugin'

skipWaiting()
clientsClaim()

new Prefetcher({
  plugins: [
    new DeepFetchPlugin([
      // {
      //   selector: '[rel="preload"][as="style"]',
      //   maxMatches: 5,
      //   attribute: 'href',
      //   as: 'style',
      // },
      // {
      //   selector: '[rel="preload"][as="script"]',
      //   maxMatches: 5,
      //   attribute: 'href',
      //   as: 'script',
      // },
      {
        selector: '[rel="preload"][as="image"]',
        maxMatches: 1,
        attribute: 'href',
        as: 'image',
      },
    ]),
  ],
})
  .route()
  .cache(/^https:\/\/www\.petsmart\.(com)\/.*/)
