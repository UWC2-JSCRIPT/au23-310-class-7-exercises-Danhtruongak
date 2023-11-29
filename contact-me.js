const email = document.querySelector("#emailEl");
const form = document.querySelector("#contact-form");
const nameEl = document.querySelector("#name");
const textarea = document.querySelector("#textarea");
const select = document.querySelector(".form-select");
const jobTitle = document.querySelector("#job-title");
const website = document.querySelector("#website");
const codeSelect = document.querySelector(".code-select");
const inputs = document.querySelectorAll("input");
let valid = false;

inputs.forEach((el) => {
  const nameValidation = (el) => {
    if (nameEl.value.trim().length > 3) {
      nameEl.parentElement.classList.remove("invalid");
      nameEl.nextElementSibling.classList.add("hidden");
      return true;
    } else {
      nameEl.parentElement.classList.add("invalid");
      nameEl.nextElementSibling.textContent = "At least 3 characters";
      return false;
    }
  };
  const emailValidation = (el) => {
    const reg = /([a-zA-Z0-9\.\_\-]+@[a-zA-Z]+.[a-zA-Z]+)/;
    if (reg.test(email.value.trim())) {
      email.parentElement.classList.remove("invalid");
      email.nextElementSibling.classList.add("hidden");

      return true;
    } else {
      email.parentElement.classList.add("invalid");
      email.nextElementSibling.textContent = "Invalid Email";
      return false;
    }
  };

  const urlValidation = (el) => {
    const reg = /(https?\:\/\/+www.[a-zA-Z0-9]+\.[a-zA-Z]{3,})/;
    if (reg.test(website.value.trim())) {
      website.parentElement.classList.remove("invalid");
      website.nextElementSibling.classList.add("hidden");
      return true;
    } else {
      website.parentElement.classList.add("invalid");
      website.nextElementSibling.textContent = "Invalid url";
      return false;
    }
  };

  const textareaValidation = (el) => {
    let textLength = textarea.value.trim().length;
    if (textLength > 10) {
      textarea.parentElement.classList.remove("invalid");

      return true;
    } else {
      textarea.parentElement.classList.add("invalid");
      textarea.nextElementSibling.textContent = "At least 10 characters";
      return false;
    }
  };

  const handleSelect = function (select) {
    const selectValue = select.value;
    if (selectValue == "Job-opportunity") {
      jobTitle.parentElement.classList.remove("hidden");
      website.parentElement.classList.remove("hidden");
      codeSelect.parentElement.classList.add("hidden");
      textarea.parentElement.classList.add("hidden");
    } else if (selectValue == "Talk-code") {
      codeSelect.parentElement.classList.remove("hidden");
      textarea.parentElement.classList.remove("hidden");
      jobTitle.parentElement.classList.add("hidden");
      website.parentElement.classList.add("hidden");
    }
  };

  select.addEventListener("change", () => handleSelect(select));

  form.addEventListener("submit", (e) => {
    if (
      nameValidation() &&
      emailValidation() &&
      urlValidation() &&
      textareaValidation()
    ) {
      valid = true;
    } else {
      e.preventDefault();
    }
  });
});
