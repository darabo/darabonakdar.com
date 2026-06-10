/*
 * The site's only JavaScript file. The site works fine without it —
 * these are progressive enhancements:
 *
 *   1. Open/close the mobile navigation menu
 *   2. Add a divider under the nav bar once the page is scrolled
 *   3. Fade content in as it scrolls into view
 *   4. Keep the copyright year in the footer current
 *
 * It's loaded with `defer` (see _layouts/default.html), which means it
 * runs after the HTML is parsed — so all elements exist by the time we
 * query for them, no "DOM ready" wrapper needed.
 *
 * Elements are found via data-* attributes (data-nav-toggle etc.) rather
 * than CSS classes, so styling can be changed without breaking behaviour.
 */

// --- 1. Mobile navigation menu -----------------------------------------

const toggle = document.querySelector("[data-nav-toggle]"); // hamburger button
const menu = document.querySelector("[data-nav-menu]");     // the list of links

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    // classList.toggle returns true if the class was just added,
    // i.e. whether the menu is now open
    const open = menu.classList.toggle("is-open");
    // Keep the accessibility attribute in sync so screen readers
    // announce the correct state
    toggle.setAttribute("aria-expanded", String(open));
  });

  // Close the menu after a link inside it is tapped, so it isn't still
  // covering the page when the user navigates within it
  menu.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

// --- 2. Nav-bar divider on scroll ---------------------------------------

const header = document.querySelector("[data-header]");

if (header) {
  // Add .is-scrolled whenever the page isn't at the very top; CSS shows a
  // subtle bottom border when the class is present
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
  onScroll(); // run once on load, in case the page starts scrolled down
  // "passive: true" promises the handler won't block scrolling, which
  // keeps scrolling smooth, especially on older phones
  window.addEventListener("scroll", onScroll, { passive: true });
}

// --- 3. Scroll-reveal animations ----------------------------------------

const revealEls = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  // An IntersectionObserver efficiently tells us when an element enters
  // the viewport — much cheaper than measuring positions on every scroll
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          // .is-visible triggers the CSS fade/slide-in transition
          entry.target.classList.add("is-visible");
          // Each element only animates once, so stop watching it
          observer.unobserve(entry.target);
        }
      }
    },
    // Start the animation when 15% of the element is visible, and treat
    // the viewport as 40px shorter so things animate slightly before
    // they'd be fully on screen
    { threshold: 0.15, rootMargin: "0px 0px -40px" }
  );
  revealEls.forEach((el) => observer.observe(el));
} else {
  // Very old browser: skip the animation, just show everything
  revealEls.forEach((el) => el.classList.add("is-visible"));
}

// --- 4. Footer copyright year --------------------------------------------

const year = document.querySelector("[data-year]");
if (year) year.textContent = new Date().getFullYear();
