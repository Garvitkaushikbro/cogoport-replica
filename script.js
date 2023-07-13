// Specify the media query
const mediaQuery = window.matchMedia("(max-width: 768px)");

// Check if the media query matches
if (mediaQuery.matches) {
  // Media query matches, do something for smaller screens

  document.querySelector("p.hero-section-content-left-heading").textContent =
    "Strengthen your Supply Chain, and Scale your Business with Reliable Shipping and Cashflows.";
  document.querySelector(".onestop-content>h2").textContent =
    "One Stop Solution for Your Supply Chain";
}
