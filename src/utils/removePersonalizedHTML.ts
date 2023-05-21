import {
    CheerioAPI
} from 'cheerio'
import accountHtml from '../html/accountHtml'
import myStoreHtml from '../html/myStoreHtml'
import miniCartHtml from '../html/miniCartHtml'
import mobileIconSearchHtml from '../html/mobileIconSearchHtml'
import mobileNavCartHtml from '../html/mobileNavCartHtml'
import mobileTopMenuHtml from '../html/mobileTopMenuHtml'
import mobileProfileIconHtml from '../html/mobileProfileIconHtml'
import mobileMiniCart from '../html/mobileMiniCart'

export default ($: CheerioAPI) => {
    $('.header-signin').html(accountHtml)
    $('#mini-cart').html(miniCartHtml)
    $('#masthead-my-store').html(myStoreHtml) // myStoreHtml
    $('.mobile-search-icon-wrapper').html(mobileIconSearchHtml)
    $('#mobile-nav-cart-wrapper').html(mobileNavCartHtml)
    $('.mobile-top-menu').html(mobileTopMenuHtml)
    $('.mobile-profile-icon-wrapper').html(mobileProfileIconHtml)
    $('#mini-cart-mobile').html(mobileMiniCart)
    $('#plp-store-search .store-search-input-wrapper').remove()

    // $('#react-pdp-root').removeAttr('data-sessionpromotions') // ????

    const placeholder = [{
            "promotion_id": "promotionID1",
            "callout_msg": "callout_msg1",
            "details": "details1"
        },
        {
            "promotion_id": "promotionID2",
            "callout_msg": "callout_msg2",
            "details": "details2"
        },
        {
            "promotion_id": "promotionID3",
            "callout_msg": "callout_msg3",
            "details": "details3"
        },
    ]
    $('#react-pdp-root').attr('data-sessionpromotions', JSON.stringify(placeholder))


    // const example = [
    //     {
    //         "promotion_id": "0523-FW14-35P-TEXT-ONLY-Off-Autoship-Order",
    //         "callout_msg": "Save 35% On Your First Autoship Order!",
    //         "details": "Save 35% on your first Autoship order up to a maximum savings of $20.00 and 5% on all recurring orders. Certain products and brands are not eligible for sitewide offers or promotions and specifically excludes, select products from The Pharmacy at PetSmart, all Royal Canin and Eukanuba products, all services, gift cards, gift certificates, previous purchases and charitable donations. Must be signed in to your Treats account to receive discount. Savings will automatically reflect in shopping cart with purchase of qualifying product and enrollment in Autoship. Offer may not be combinable with other promotional offers or discounts. Treats members receive free shipping on orders over $49.00, prior to taxes & after discounts are applied. Recurring Autoship orders will be charged the online price of the date the order ships. Prices & selection may vary. While supplies last. Quantities may be limited and deliveries may be delayed."
    //     },
    //     {
    //         "promotion_id": "0523-FW14-TEXT-ONLY-Treats-Loyalty-Members-Free-Shipping-Over-$49",
    //         "callout_msg": "Sign In & Enjoy Free Shipping Over $49",
    //         "details": "Treats members enjoy Free Standard Shipping on orders over $49. Must be signed into your Treats account prior to purchase. Transaction total is prior to taxes & after discounts are applied. Savings will automatically reflect in shopping cart with the purchase of qualifying merchandise. Maximum value $75. Due to size and/or weight, certain items bear an additional shipping surcharge or special handling fee. Valid only on orders shipped within the contiguous 48 U.S. states, military APO/FPO addresses and select areas throughout Canada. Offer not valid on all or select products in the following categories: live pets, canned, fresh or frozen foods, select cat litters.  Offer may not be combinable with other promotional offers or discounts. Terms and conditions of this offer are subject to change at the sole discretion of PetSmart. Delivery may be delayed due to acts beyond our reasonable control, which may include, but are not limited to, weather, strikes, power outages, shutdowns, local, provincial or federal governmental actions, and other similar acts. Offer valid on PetSmart.com."
    //     },
    //     {
    //         "promotion_id": "0523-FW14-TEXTOnly-FreeSameDayDelivery",
    //         "callout_msg": "Free Same-Day Delivery!",
    //         "details": "Free Same-Day Delivery offer valid on select merchandise purchased at petsmart.com when choosing Same-Day Delivery. Same-day delivery is available in most areas. Order by 9am for delivery between 12pm-3pm, by 1pm for delivery between 3pm-6pm, & by 3pm for delivery between 6pm-8pm. Orders placed after 3pm will be fulfilled the next day. Delivery may be delayed due to acts beyond our reasonable control, which may include, but are not limited to, weather, strikes, power outages, shutdowns, local, provincial or federal governmental actions, and other similar acts. While delivery is contact-free, be sure to be home during your delivery window to bring any perishable items inside right away. Prices & selection may vary in stores & online. While supplies last. Quantities may be limited. See www.petsmart.com/help or store associate for more details."
    //     }
    // ]
}