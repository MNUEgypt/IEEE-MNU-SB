// sticky header
window.addEventListener("scroll", function () {
  var headr = document.querySelector("header");
  headr.classList.toggle("sticky", scrollY > 0);
});

// highlight current page link in header
const links = document.querySelectorAll("header ul li a");
const currentPage = window.location.pathname.split("/").pop(); // get current file name

links.forEach(link => {
  const linkPage = link.getAttribute("href");
  
  // check if current page matches link
  if (linkPage === currentPage) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});

// reveal elements on scroll
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 100; // trigger point

    if (elementTop < windowHeight - elementVisible) {
      el.classList.add("active");
    } else {
      // el.classList.remove("active"); // remove if you want repeat
    }
  });
});
// Glider js 

const gliders = document.querySelectorAll('.glider');
const dots = document.querySelectorAll('.dots');
const prevs = document.querySelectorAll('.glider-prev');
const nexts = document.querySelectorAll('.glider-next');

gliders.forEach((glider, i) => {
  new Glider(glider, {
slidesToShow: 5,
    slidesToScroll: 3,
    draggable: true,
    dots: dots[i],
    arrows: {
      prev: prevs[i],
      next: nexts[i]
    }
  });
});




var swiper = new Swiper(".swiper", {
  effect: "cards",
  grabCursor: true,
  loop: false,
  centeredSlides: true,
  mousewheel: {
    invert: false,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

