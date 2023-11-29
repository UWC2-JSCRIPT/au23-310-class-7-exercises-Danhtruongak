// TODO
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const form = document.querySelector("#connect-form");
const select = document.querySelector("#contact-kind");
const os = document.querySelector("#operating-system");
const employees = document.querySelector("#num-of-employees");

let valid = false;

const validLength = (input, min) => {
  if (input.value.trim().length > min) {
    input.parentElement.classList.remove("invalid");
    return true;
  } else {
    input.parentElement.classList.add("invalid");
    addError("Need at least 3 characters");
    return false;
  }
};

const validateEmail = (email) => {
  const reg = /([a-zA-Z0-9\.\_\-]+@[a-zA-Z]+.[a-zA-Z]+)/;
  if (reg.test(email.value.trim())) {
    email.parentElement.classList.remove("invalid");
    return true;
  } else {
    email.parentElement.classList.add("invalid");
    addError("Invalid email address");
    return false;
  }
};

const handleSelect = function (select) {
  const selectValue = select.value;
  if (selectValue == "business") {
    employees.parentElement.classList.remove("hidden");
    os.parentElement.classList.add("hidden");
  } else if (selectValue == "technical") {
    os.parentElement.classList.remove("hidden");
    employees.parentElement.classList.add("hidden");
  }
};

function addError(mes) {
  console.log(mes);
}

select.addEventListener("change", () => handleSelect(select));

form.addEventListener("submit", (e) => {
  handleSelect(select);
  if (
    validLength(firstName, 3) &&
    validLength(lastName, 3) &&
    validateEmail(email)
  ) {
    valid = true;
  } else {
    valid = false;
    function addError(mes) {
      console.log(mes);
    }
    e.preventDefault();
  }
});
