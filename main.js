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
const logo = document.querySelectorAll(".logo");

toggleMenu.addEventListener("click", () => {
    toggleMenu.classList.toggle("active");
    navItem.classList.toggle("active");
    document.body.classList.toggle("stop-scrolling");
    logo[0].classList.toggle('logo-hidden');
    logo[1].classList.toggle('logo-shown');
});

document.querySelectorAll(".nav__list-link").forEach(e => 
    e.addEventListener("click", () => {
      document.body.classList.remove("stop-scrolling");
      toggleMenu.classList.remove("active");
      navItem.classList.remove("active");
      logo[0].classList.remove('logo-hidden');
      logo[1].classList.remove('logo-shown');
}));


/* window.addEventListener("scroll", () => {
    navbar.classList.toggle("nav-srolled", window.scrollY > 0);
}) */