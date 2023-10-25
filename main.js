// animation on scroll
AOS.init();

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

const items = [
  {
    question: "What services do you offer?",
    class1: "fas fa-minus-square",
    class2: "fas fa-plus-square",
    answer:
      "we offer washing,drying,foldong, and ironing services for your clothing.",
    number: 200,
  },
  {
    question: "How does your pricing work?",
    class1: "fas fa-minus-square",
    class2: "fas fa-plus-square",
    answer:
      "Pricing is typically based on the weight of your laundry, the type of items,and any additional services you require. You can find our pricing details on our website or by contacting us directly.",
    number: 300,
  },
  {
    question: "Is my laudry safe with you?",
    class1: "fas fa-minus-square",
    class2: "fas fa-plus-square",
    answer:
      "Yes, we take great care in handling your laundry. Our staff is trained to maintain the highest standards of quality and security.",
    number: 400,
  },
  {
    question: "Do you offer any discounts?",
    class1: "fas fa-minus-square",
    class2: "fas fa-plus-square",
    answer:
      "We often have promotions and loyatly programs for regular customers. Check our website or inquire anout current offers.",
    number: 500,
  },
  {
    question: "How can I pay for your services?",
    class1: "fas fa-minus-square",
    class2: "fas fa-plus-square",
    answer:
      "We accept various payment methods, including credit card, online payments,and cah on delivery.",
    number: 600,
  },
  {
    question: "How do I contact your customer support?",
    class1: "fas fa-minus-square",
    class2: "fas fa-plus-square",
    answer:
      "You can reach our customer support team via phone, email or through our website.",
    number: 700,
  },
];

const questions = document.querySelector(".questions-center");

questions.innerHTML = items
  .map((item) => {
    // console.log(item);
    return `<article class="question" data-aos="fade-up" data-aos-delay="${item.number}">
      <div class="question-title " >
        <p>${item.question}</p>
        <button type="button" class="question-btn">
          <span class="plus-icon">
            <i class="${item.class2}"></i>
          </span>
          <span class="minus-icon">
            <i class="${item.class1}"></i>
          </span>
        </button>
      </div>

      <div class="question-text">
        <p>${item.answer}</p>
      </div>
    </article>`;
  })
  .join("");

const qst = document.querySelectorAll(".question");

qst.forEach((question) => {
  const btn = question.querySelector(".question-btn");

  // console.log(btn);

  btn.addEventListener("click", () => {
    question.classList.toggle("show-text");

    qst.forEach((item) => {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
  });
});

// about section
const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;

  if (id) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
    console.log(element);
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
const name = document.getElementById("name");
const email = document.getElementById("email");
const number = document.getElementById("number");
const form = document.querySelector(".form");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formInput.forEach((input) => {
    input.value = "";
  });
  formT.value = "";
  // modal.classList.remove("open-modal");
});

// show input error message
const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = "form-row error";
  const small = formControl.querySelector("small");
  console.log(small);
  small.innerText = message;
};
// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
// Check email is valid
function checkEmail(input) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}

// Check required fields
function checkRequired(inputArr) {
  let isRequired = false;
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
      isRequired = true;
    } else {
      showSuccess(input);
    }
  });
  return isRequired;
}

// Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (checkRequired([name, email, number, formT])) {
    checkLength(name, 3, 15);
    checkLength(formT, 6, 25);
    checkLength(number, 6, 25);
    checkEmail(email);
  }
});

// initialize animation on scroll
