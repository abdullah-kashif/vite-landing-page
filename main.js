const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

// Function to handle scroll event
let lastScrollTop = 0;
const handleScroll = () => {
  let scrollTop = window.scrollY || window.pageYOffset;

  if (scrollTop > lastScrollTop) {
    // Downscroll code
    navToggle.classList.add("hide-nav-toggle");
  } else {
    // Upscroll code
    navToggle.classList.remove("hide-nav-toggle");
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
};

// Event listener for scroll
window.addEventListener("scroll", handleScroll);

// Initial call to handle scroll (in case the page loads scrolled)
handleScroll();

// Event listener for mobile nav toggle click
navToggle.addEventListener("click", () => {
  // Toggle aria-expanded attribute
  const isVisible = primaryNav.hasAttribute("data-visible");
  navToggle.setAttribute("aria-expanded", !isVisible);

  // Toggle data-visible attribute
  primaryNav.toggleAttribute("data-visible");

  // Toggle data-overlay attribute on primary header
  primaryHeader.toggleAttribute("data-overlay");

  // After toggle, reset margin top of primaryNav
  primaryNav.style.marginTop = isVisible ? `${primaryHeader.offsetHeight}px` : '0';
});

const slider = new A11YSlider(document.querySelector(".slider"), {
  adaptiveHeight: false,
  dots: true,
  centerMode: true,
  arrows: false,
  responsive: {
    480: {
      dots: false, // dots enabled 1280px and up
    },
  },
});
