import AOS from "aos";
import Lenis from "lenis";
import Swiper from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";

// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

AOS.init({
  once: true,
  duration: 1000,
});

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.querySelector(".menu ul");

  menuToggle.addEventListener("click", () => {
    // Toggle the 'open' class on the menu for transitions
    menu.classList.toggle("open");
  });
});

// For navbar

const navbar = document.getElementById("navbar");
// const navContent = document.getElementById("nav-content");
navbar.style.position = "fixed";
navbar.style.top = 0;

function createScrollDirectionTracker() {
  let scrollDirection = "up";
  let lastScrollY = 0;

  function handleScroll() {
    const currentScrollY = Lenis.scroll || window.pageYOffset; // Using Lenis scroll

    if (currentScrollY > lastScrollY) {
      scrollDirection = "down";
    } else {
      scrollDirection = "up";
    }

    lastScrollY = currentScrollY;
    // console.log(scrollDirection);
    // Hide navbar on scroll down
    if (scrollDirection === "down") {
      navbar.style.top = "-10rem";
      navbar.style.transition = "all 0.5s ease";
    } else {
      if (currentScrollY > 0) {
        navbar.style.top = "0";
        navbar.style.boxShadow = "0 0 20px 0 #2B245D21";
      } else {
        navbar.style.top = `${0}px`;
        navbar.style.boxShadow = "none";
        navbar.style.transition = "all 0.5s ease";
      }
    }

    // Box shadow and fixed position on scroll
    if (currentScrollY > 0) {
      // navContent.style.boxShadow = "0 0 20px 0 #2B245D21";
      // navContent.style.position = "fixed";
    } else {
      // navContent.style.boxShadow = "none";
    }
  }

  // Listen to scroll events
  window.addEventListener("scroll", handleScroll);

  return {
    getScrollDirection: () => scrollDirection,
    cleanup: () => {
      window.removeEventListener("scroll", handleScroll);
    },
  };
}

createScrollDirectionTracker();

// Select elements
const playIcon = document.getElementById("playIcon");
const playIcon2 = document.getElementById("playIcon2");
const videoModal = document.getElementById("videoModal");
const closeModal = document.getElementById("closeModal");
const videoFrame = document.getElementById("videoFrame");

// YouTube Video URL
const videoURL =
  "https://www.youtube.com/embed/Os1oDqefGOA?si=ZNoNK5qI3_0xqDn8";

// Show modal on play icon click
playIcon.addEventListener("click", () => {
  videoFrame.src = videoURL; // Set the video source
  videoModal.classList.remove("hidden");
  videoModal.classList.add("flex");
});

playIcon2.addEventListener("click", () => {
  videoFrame.src = videoURL; // Set the video source
  videoModal.classList.remove("hidden");
  videoModal.classList.add("flex");
});

// Close modal on close button click
closeModal.addEventListener("click", () => {
  videoFrame.src = ""; // Stop the video
  videoModal.classList.add("hidden");
  videoModal.classList.remove("flex");
});

// Close modal on background click
videoModal.addEventListener("click", (event) => {
  if (event.target === videoModal) {
    videoFrame.src = ""; // Stop the video
    videoModal.classList.add("hidden");
    videoModal.classList.remove("flex");
  }
});

// Swiper
const swiper = new Swiper(".swiper", {
  modules: [Autoplay],
  speed: 400,
  // autoplay: {
  //   delay: 5000,
  // },
  breakpoints: {
    // When the viewport is 768px or wider (PC screens)
    1140: {
      slidesPerView: 3, // Show 3 items
      spaceBetween: 26,
    },
    // When the viewport is between 480px and 767px (Tabs)
    768: {
      slidesPerView: 2, // Show 2 items
      spaceBetween: 26,
    },
    // For anything smaller than 480px (Phone screens)
    0: {
      slidesPerView: 1, // Show 1 item
    },
  },
});

// Swiper
const servicesSwiper = new Swiper("#services .swiper", {
  modules: [Autoplay, Pagination],
  speed: 400,
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    1140: {
      slidesPerView: 3,
      spaceBetween: 26,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 26,
    },
    0: {
      slidesPerView: 1,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

servicesSwiper.on("slideChangeTransitionEnd", () => {
  servicesSwiper.update(); // Force state update after swiping
});
