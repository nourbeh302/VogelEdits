var menuTogglerBtn = document.querySelector("button.nav-toggler");
var navCollapse = document.querySelector("ul.nav-collapse");
var htmlEl = document.querySelector("html");

menuTogglerBtn.children[1].style.display = "none";

menuTogglerBtn.addEventListener("click", () => {
  navCollapse.toggleAttribute("active");
  toggleIcons();
  toggleHTMLOverflow();
});

function toggleHTMLOverflow() {
  htmlEl.style.overflow != "hidden"
    ? (htmlEl.style.overflow = "hidden")
    : (htmlEl.style.overflow = "visible");
}

function resetOverflow() {
  htmlEl.style.overflow = "visible";
  navCollapse.removeAttribute("active");
  toggleIcons();
}

function toggleIcons() {
  if (menuTogglerBtn.children[0].style.display == "none") {
    menuTogglerBtn.children[0].style.display = "block";
    menuTogglerBtn.children[1].style.display = "none";
  } else {
    menuTogglerBtn.children[0].style.display = "none";
    menuTogglerBtn.children[1].style.display = "block";
  }
}

navCollapse.childNodes.forEach((child) => {
  child.addEventListener("click", () => resetOverflow());
});

// Fade-in-up animation: create the observer
var observer = new IntersectionObserver((entries) => {
  applyAnimation(entries);
  setTimeout(() => stopAnimation(entries), 3000);
});

function applyAnimation(entries) {
  entries.forEach((entry) => {
    entry.target.classList.toggle("fade-in-up", entry.isIntersecting);
  });
}

function stopAnimation(entries) {
  entries.forEach((entry) => {
    observer.unobserve(entry.target);
  });
}

// Observe the elements
[
  document.querySelector(".hero-content"),
  document.querySelector("nav"),
  document.querySelector(".videos-container"),
].forEach((element) => {
  observer.observe(element);
});
