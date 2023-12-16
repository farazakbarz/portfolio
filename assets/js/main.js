/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", scrollActive);

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

/*SCROLL HOME*/
sr.reveal(".home__title", {});
sr.reveal(".home__scroll", { delay: 200 });
sr.reveal(".home__img", { origin: "left", delay: 400 });

/*SCROLL ABOUT*/
sr.reveal(".about__img", { delay: 500 });
sr.reveal(".about__subtitle", { delay: 300 });
sr.reveal(".about__profession", { delay: 400 });
sr.reveal(".about__text", { delay: 500 });
sr.reveal(".about__social-icon", { delay: 600, interval: 200 });

/*SCROLL SKILLS*/
sr.reveal(".skills__subtitle", {});
sr.reveal(".skills__name", { distance: "20px", delay: 50, interval: 100 });
sr.reveal(".skills__img", { delay: 400 });

/*SCROLL PORTFOLIO*/
sr.reveal(".portfolio__img", { interval: 200 });

/*SCROLL CONTACT*/
sr.reveal(".contact__subtitle", {});
sr.reveal(".contact__text", { interval: 200 });
sr.reveal(".contact__input", { delay: 400 });
sr.reveal(".contact__button", { delay: 600 });

/// JavaScript
function changeLanguage() {
  const elementsToTranslate = document.querySelectorAll(".translatable");
  const languageSelect = document.getElementById("language-select");
  const selectedLanguage = languageSelect.value;

  // Define language options
  const languages = {
    en: {
      "site-title": "RAZZCODE",
      "nav-home": "Home",
      "nav-about": "About",
      "nav-skills": "Skills",
      "nav-port": "Portfolio",
      "about-me": "About Me",
      "nama-ku": "I'am Farraz (Razzcode)",
      "text-ku":
        "Hello, I'm Farraz, a design fanatic who's all about the cool stuff in 3D and 2D. Whether I'm building awesome 3D worlds or creating eye-catching graphics, design isn't just something I'm good at—it's a big part of who I am. Plus, I also dabble in the wild world of web development, rocking out with HTML, CSS, and PHP",
      "skill-me": "Skills",
      "port-me": "Portfolio",
      "contact-me": "Contact",
      "phone-me": "Phone",
      "address-me": "Address",
      "nav-link": "Contact",

      // Add more entries as needed
    },
    id: {
      "site-title": "RAZZ-CODE",
      "nav-home": "Beranda",
      "nav-about": "Tentang",
      "nav-skills": "Keahlian",
      "nav-port": "Portofolio",
      "nav-scroll": "Scroll Kebawah",
      "about-me": "Tentang Saya",
      "nama-ku": "Nama ku Farraz (Razzcode)",
      "text-ku":
        "Hai, aku Farraz, pencinta desain yang suka banget sama yang keren-keren di dunia 3D dan 2D. Mulai dari bikin 3D, sampe ngebuat grafis yang mantep, desain buat aku bukan cuma keahlian biasa, tapi bagian besar dari jati diri aku. Selain itu, aku juga suka eksplor dunia pengembangan web, masih belajar sama HTML, CSS, dan PHP",
      "skill-me": "Keahlian",
      "port-me": "Portofolio",
      "contact-me": "Kontak",
      "phone-me": "Nomor HP",
      "address-me": "Alamat",
      "nav-link": "Kontak",

      // Add more entries as needed
    },
  };

  // Update elements based on selected language
  elementsToTranslate.forEach((element) => {
    const key = element.dataset.key;
    element.textContent =
      languages[selectedLanguage][key] || element.textContent;
  });
}
