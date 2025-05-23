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

document.querySelectorAll('[data-link-popup]').forEach(function(element) {
  element.addEventListener('click', function(evt) {
      evt.preventDefault()

      // Add 'active' class to .custom-popup and 'overhidden' to the body
      document.querySelector(`.custom-popup[data-popup-id="${element.dataset.linkPopup}"]`)?.classList.add('active');
      document.body.classList.add('overhidden');
  });
}); 

document.querySelectorAll('.custom-popup[data-popup-id]').forEach(popup => {
  document.body.appendChild(popup)
})

// When a .popup-close element is clicked
document.querySelectorAll('.popup-close').forEach(close => {
  close.addEventListener('click', function() {
    this.closest('.custom-popup').classList.remove('active');
    document.body.classList.remove('overhidden');
  });
})

// When the .popup_bg element is clicked
document.querySelector('.popup_bg')?.addEventListener('click', function() {
  document.querySelector('.custom-popup').classList.remove('active');
  document.body.classList.remove('overhidden');
});

class SliderCollectionItem extends HTMLElement {
  constructor() {
    super();
      const _this = this

      this._initCarousel()
  }

  _initCarousel() {
    const slider = this.querySelector('.product-item__slider');
    const nextButton = this.querySelector("[data-next]");
    const prevButton = this.querySelector("[data-prev]");
    const slides = slider.querySelectorAll('.slider-collection__slide');

    let currentIndex = 0;

    const updateButtons = () => {
      if (prevButton) {
        prevButton.classList.toggle('button-disabled', currentIndex === 0);
      }
      if (nextButton) {
        nextButton.classList.toggle('button-disabled', currentIndex >= slides.length - 1);
      }
    };

    const scrollToSlide = (index) => {
      const targetSlide = slides[index];
      if (targetSlide) {
        slider.scrollTo({
          left: targetSlide.offsetLeft,
          behavior: 'smooth'
        });
      }
    };

    if (nextButton) {
      nextButton.addEventListener('click', () => {
        if (currentIndex < slides.length - 1) {
          currentIndex++;
          scrollToSlide(currentIndex);
          updateButtons();
        }
      });
    }

    if (prevButton) {
      prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
          currentIndex--;
          scrollToSlide(currentIndex);
          updateButtons();
        }
      });
    }

    // Initial setup
    updateButtons();
  }
}

// Register the custom element
customElements.define('slider-collection-item', SliderCollectionItem);


// js/common/behavior/scroll-progress.js
var ScrollProgress = class extends HTMLElement {
    connectedCallback() {
      this.scrolledElement.addEventListener("scroll", throttle(this._updateScrollProgress.bind(this)));
      if (window.ResizeObserver) {
        new ResizeObserver(this._updateScrollProgress.bind(this)).observe(this.scrolledElement);
      }
    }
    get scrolledElement() {
      return this._scrolledElement = this._scrolledElement || document.getElementById(this.getAttribute("observes"));
    }
    _updateScrollProgress() {
      const scrollLeft = document.dir === "ltr" ? this.scrolledElement.scrollLeft : Math.abs(this.scrolledElement.scrollLeft), advancement = (scrollLeft + this.scrolledElement.clientWidth) / this.scrolledElement.scrollWidth;
      this.style.setProperty("--scroll-progress", Math.max(0, Math.min(advancement, 1)).toFixed(6));
    }
  };
if (!window.customElements.get("scroll-progress")) {
    window.customElements.define("scroll-progress", ScrollProgress);
}

function throttle(fn, wait = 100) {
  let lastTime = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastTime >= wait) {
      lastTime = now;
      fn.apply(this, args);
    }
  };
}