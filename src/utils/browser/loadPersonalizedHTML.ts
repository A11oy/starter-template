const loadElement = (doc: Document, selector: string) => {
  if (!doc || !selector) {
    return
  }

  const element = document.querySelector(selector)
  if (element) {
    const parsedData = doc.querySelector(selector)
    if (parsedData) {
      console.log("Lateloaded", selector, parsedData.innerHTML)
      element.innerHTML = parsedData.innerHTML
    }
  }
}

export default (doc: Document) => {
  loadElement(doc, '.header-signin') // account
  loadElement(doc, '#masthead-my-store') // my store
  loadElement(doc, '#mini-cart') // minicart
  loadElement(doc, '#mini-cart-mobile') // mobile minicart
  loadElement(doc, '.mobile-search-icon-wrapper') // mobile search icon
  loadElement(doc, '#mobile-nav-cart-wrapper') // mobile nav cart
  loadElement(doc, '.mobile-top-menu') // mobile top menu
  loadElement(doc, '.mobile-profile-icon-wrapper') // mobile profile icon
  loadElement(doc, '#plp-store-search .store-search-input-wrapper') // store section on plp

  // TODO: late load data-sessionpromotions
  // $('#react-pdp-root').attr('data-sessionpromotions', JSON.stringify(placeholder))
}