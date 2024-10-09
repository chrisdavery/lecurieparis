// Custom events have been added to the theme to make adding
// custom functionality easier. The below events have been
// exposed as well as the associated data for each event.
// To enable this functionality update the 'useCustomEvents' variable in
// the theme.liquid file to 'true'.

// This event fires whenever an item has been added to the cart.
// This event is exposed when the ajax cart is enabled.
// The product object is passed within the detail object.
document.addEventListener("cart:item-added", function (evt) {
  console.log("Item added to the cart");
  console.log(evt.detail.product);
});

// This event fires whenever the cart is updated.
// This event is exposed when the ajax cart is enabled.
// The cart object is passed within the detail object.
document.addEventListener("cart:updated", function (evt) {
  console.log("Cart updated");
  console.log(evt.detail.cart);
});

// This event fires whenever there is an error when adding an item to the cart.
// This error is typically due to a product not having sufficient stock.
// The error message is passed within the detail object.
document.addEventListener("cart:error", function (evt) {
  console.log("Cart error");
  console.log(evt.detail.errorMessage);
});

// This event fires whenever the quick cart is opened.
// This event is exposed when the ajax cart is enabled.
// The cart object is passed within the detail object.
document.addEventListener("quick-cart:open", function (evt) {
  console.log("Quick cart opened");
  console.log(evt.detail.cart);
});

// This event fires whenever the quick cart is opened.
// This event is exposed when the ajax cart is enabled.
document.addEventListener("quick-cart:close", function () {
  console.log("Quick cart closed");
});

// This event fires whenever a variant product is selected.
// This event is exposed when a 'Variant selectors' block has been added to
// a product template or featured product section
// The selected variant object is passed within the detail object.
document.addEventListener("product:variant-change", function (evt) {
  console.log("Product variant changed");
  console.log(evt.detail.variant);
});

// This event fires whenever a product quanatiy is updated.
// This event is exposed when a 'Quantity selector' block has been added to
// a product template or featured product section
// The quantity and selected variant object is passed within the detail object.
document.addEventListener("product:quantity-update", function (evt) {
  console.log("Product quantity updated");
  console.log(evt.detail.quantity, evt.detail.variant);
});

// This event fires whenever quickview modal is opened.
// This event is exposed when the 'Enable quick view' feature is enabled
// And a quick view modal is opened.
document.addEventListener("quickview:loaded", function () {
  console.log("Quickview loaded");
});

// import('https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs').then(_ref => {
//   let {
//     Swiper
//   } = _ref;

//   var swiper = new Swiper(".inner--main", {
//     direction: "vertical",
//     mousewheel: {
//         invert: false,
//     },
//     speed: 600,
//     autoHeight: true,
//     grabCursor: true,
//     effect: "creative",
//     creativeEffect: {
//         prev: {
//             translate: [0, 0, 0],
//         },
//         next: {
//             translate: [0, "100%", 0],
//         },
//     },
//     on: {
//       slideChangeTransitionStart: function (e) {
//         activeHeightSet(e)
//       },
//     }
// });

// function activeHeightSet(e) {
//     const blackHeader = e.slides[e.activeIndex].querySelector('.black-header')
//     var activeSlide = e.slides[e.activeIndex].querySelector("[data-section-type]");

//     setTimeout( function() {
//       document.querySelector('.header').classList.remove('blacked')
//     }, 600)

//     if (blackHeader != null) {
//       setTimeout( function() {
//         document.querySelector('.header').classList.add('blacked')
//       }, 600)
//     }
//     if (activeSlide) {
//         var activeHt = activeSlide.offsetHeight;
//         eventActiveHt(activeHt);
//         scrollUp();
//     }
// }

// function eventActiveHt(activeHt) {
//     var swiperContainer = document.querySelector(".swiper-container");
//     if (swiperContainer == null) return;
//     swiperContainer.style.transition = "none";
//     // You can add specific styles you want to animate here
// }

// function scrollUp() {
//   document.documentElement.scrollTo({
//     top: 0,
//     behavior: 'smooth'
//   });
// }
// });

// When a .custom_popup-title element is clicked
document.querySelectorAll('.custom_popup-title').forEach(function(element) {
  element.addEventListener('click', function() {
      // Set the content of .popup-title and .popup-main
      document.querySelector('.popup-title').innerHTML = this.innerHTML;
      document.querySelector('.popup-main').innerHTML = this.nextElementSibling.innerHTML;

      // Add 'active' class to .custom-popup and 'overhidden' to the body
      document.querySelector('.custom-popup').classList.add('active');
      document.body.classList.add('overhidden');
  });
});

// When a .popup-close element is clicked
document.querySelector('.popup-close')?.addEventListener('click', function() {
  document.querySelector('.custom-popup').classList.remove('active');
  document.body.classList.remove('overhidden');
});

// When the .popup_bg element is clicked
document.querySelector('.popup_bg')?.addEventListener('click', function() {
  document.querySelector('.custom-popup').classList.remove('active');
  document.body.classList.remove('overhidden');
});