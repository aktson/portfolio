

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const socialIcons = document.querySelector(".social-icons");
const mobileNavigation = document.querySelector(".navigation-mobile")

hamburger.onclick = function () {
    mobileNavigation.classList.toggle("show-nav-mobile");
    // nav.classList.toggle("show-nav")
    // if (socialIcons.style.display === "flex") {
    //     socialIcons.style.display = "none"
    // } else {
    //     socialIcons.style.display = "flex";
    // }
}
// onclick button event which takes user to top of page
const toTopBtn = document.querySelector(".to-top");
toTopBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}

// tab click event to open different projects

const tabBtns = document.querySelectorAll(".tab-button");
const tabsContent = document.querySelectorAll(".tab-content")

function showTab(e, siteName) {

    tabsContent.forEach(tabContent => {
        tabContent.style.display = "none";

    })

    tabBtns.forEach(tabBtn => {
        tabBtn.className = tabBtn.className.replace(" active-tab", "")
    })

    document.getElementById(siteName).style.display = "flex";
    e.target.className += " active-tab";

}

//sliding different sections on scroll event

const allSitesSection = document.querySelector(".all-sites");
const sitesWrapper = document.querySelector(".sites-wrapper");
const skillsSection = document.querySelector(".skills");

const rectSitesWrapper = sitesWrapper.getBoundingClientRect();
const rectSkillsSection = skillsSection.getBoundingClientRect();

window.addEventListener("scroll", () => {
    if (window.scrollY > rectSitesWrapper.top) {
        setTimeout(() => { allSitesSection.classList.add("slide-up") }, 300);
    }

    if (window.scrollY > rectSkillsSection.top) {
        setTimeout(() => { skillsSection.classList.add("add-opacity") }, 300);
    }

})
