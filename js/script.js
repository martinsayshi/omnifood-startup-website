// Make mobile nav work

const headerEl = document.querySelector(".header");
const btnNavEl = document.querySelector(".btn-mobile-nav");

btnNavEl.addEventListener('click', () => headerEl.classList.toggle("nav-open"));

// Smooth scrolling animation

const allLinks = document.querySelectorAll('a:link');

Array.from(allLinks).forEach(element => element.addEventListener('click', (e) => {
    e.preventDefault();
    const href = element.getAttribute("href");

    if(href === "#") window.scrollTo({
        top: 0,
        behavior: "smooth",
    });

    // Scroll to other links
    if (href !== "#" && href.startsWith('#')) {
        const sectionEl = document.querySelector(href);
        sectionEl.scrollIntoView({behavior: "smooth"});
    }

    // Close mobile naviagtion
    if (element.classList.contains("main-nav-link")) {
        headerEl.classList.toggle("nav-open");
    }
}));


// Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
    var flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";
  
    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));
  
    document.body.appendChild(flex);
    var isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);
    console.log(isSupported);
  
    if (!isSupported) document.body.classList.add("no-flexbox-gap");
  }
  checkFlexGap();