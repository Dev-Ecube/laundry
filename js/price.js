// *****close link*****
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", () => {
  // linksContainer.classList.toggle("show-links");
  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  // console.log({ linksHeight, containerHeight });
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

// date
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// *** Fixed Nav
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", () => {
  const scrollHeight = window.scrollY;
  const navHeight = navbar.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }

  // console.log({ scrollHeight, navHeight });

  // setUp back to top link
  if (scrollHeight > 700) {
    // console.log("first")
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

// **** smooth scrolling

const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // navigate to specific spot
    const id = e.target.dataset.id;
    const element = document.getElementById(id);
    console.log(element);

    // get the height
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;

    const fixedNav = navbar.classList.contains("fixed-nav");
    // const p = element.offsetTop;
    let position = element.offsetTop - navHeight;
    console.log({ navHeight, containerHeight });

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    linksContainer.style.height = 0;
  });
});

// styling my business title
const textWrapper = document.querySelector(".e3 .letter");
// console.log(textWrapper);

textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".e3 .letter",
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i,
  })
  .add({
    targets: ".e3",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });

// price tab section
const price = document.querySelector(".price");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

price.addEventListener("click", (e) => {
  const element = e.target;
  const id = element.dataset.id;
  const newElement = document.getElementById(id);
  console.log(newElement);

  if (id) {
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
    element.classList.add("active");

    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    newElement.classList.add("active");
  }
});

// Modal buttons
const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", function () {
  modal.classList.add("open-modal");
});
closeBtn.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});

// modal form section
const formInput = document.querySelectorAll("input");
const formT = document.querySelector(".form-textarea");
const submitBtn = document.querySelector(".submit-btn");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formInput.forEach((input) => {
    input.value = "";
  });
  formT.value = "";
  modal.classList.remove("open-modal");
});

// formInput.forEach((input) => (input.value = ""));
// const form = document.querySelector(".form");
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   form.reset();
// });

  AOS.init();