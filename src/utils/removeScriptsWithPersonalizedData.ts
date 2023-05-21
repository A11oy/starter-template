import { CheerioAPI } from 'cheerio'

export default ($: CheerioAPI) => {
  $('head script:contains("dataLayer =")').remove()
  $('script:contains("window.Constants")').remove()
  $('script:contains("window.User")').remove()
  $('script:contains("FS.identify")').remove()
  $('script:contains("function pollElement")').remove()
  $('script:contains("let appliedSsVariations")').remove()
  $('script.__ss_csf_data').remove()
  $('script:contains("og_settings")').remove()
  $('script:contains("var digitalData")').remove()
  $('script:contains("function waitForGA")').remove()
  $('style:contains("#brand-content ")').remove() // ???
}
