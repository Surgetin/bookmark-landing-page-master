const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})


const toggleMenu = document.querySelector(".menu");
const navItem = document.querySelector(".nav__list-items");

toggleMenu.addEventListener("click", () => {
    toggleMenu.classList.toggle("active");
    navItem.classList.toggle("active");
    document.body.classList.toggle("stop-scrolling")
});

document.querySelectorAll(".nav__list-link").forEach(e => 
    e.addEventListener("click", () => {
      toggleMenu.classList.remove("active");
      navItem.classList.remove("active");
      document.body.classList.remove("stop-scrolling")
}));


/* window.addEventListener("scroll", () => {
    navbar.classList.toggle("nav-srolled", window.scrollY > 0);
}) */