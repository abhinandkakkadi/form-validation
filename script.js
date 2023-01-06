const form = document.querySelector("form");
const email = document.getElementById("mail");
const emailError = document.querySelector("#mail + span.error");

const country = document.getElementById("country");
const countryError = document.querySelector("#country + span.error");

const zipcode = document.getElementById("zipcode");
const zipcodeError = document.querySelector("#zipcode + span.error");

const password = document.getElementById("password");
const passwordError = document.querySelector("#password + span.error");

email.addEventListener("input", (event) => {
  if (email.validity.valid) {
    emailError.textContent = "";
    emailError.className = "error";
  } else {
    showErrorE();
  }
});

country.addEventListener("input", (event) => {
  if (country.value.length > 5) {
    countryError.textContent = "";
    countryError.className = "error";
  } else {
    showErrorC();
  }
});

zipcode.addEventListener("input", (event) => {
  if (zipcode.value.length < 6) {
    zipcodeError.textContent = "";
  } else {
    showErrorZ();
  }
});

password.addEventListener("input", (event) => {
  if (password.value.length > 8) {
    passwordError.textContent = "";
    passwordError.className = "error";
  } else {
    showErrorP();
  }
});

form.addEventListener("submit", (event) => {
  if (!email.validity.valid) {
    showErrorE();

    event.preventDefault();
  }
  if (country.value.length < 5) {
    showErrorC();
    event.preventDefault();
  }

  if (zipcode.validity.valueMissing) {
    zipcodeError.textContent = " You need to enter a zip code";
    zipcodeError.className = "error active";
  }

  if (password.validity.valueMissing) {
    passwordError.textContent = "You must enter password";
  }
});

function showErrorE() {
  if (email.validity.valueMissing) {
    emailError.textContent = "You need to enter an email address.";
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Entered value needs to be an email address.";
  } else if (email.validity.tooShort) {
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }

  emailError.className = "error active";
}

function showErrorC() {
  if (country.validity.valueMissing) {
    countryError.textContent = "You need to enter a country name";
  } else if (country.value.length < 5) {
    countryError.textContent = "text length must be atlest 5";
  }
  countryError.className = "error active";
}

function showErrorZ() {
  if (zipcode.validity.valueMissing) {
    zipcodeError.textContent = " You need to enter a zip code";
  } else if (zipcode.value.length > 6) {
    zipcodeError.textContent = "code should not exceed 6";
  }
  zipcodeError.className = "error active";
}

function showErrorP() {
  if (password.validity.valueMissing) {
    passwordError.textContent = "You must enter password";
  } else if (password.value.length < 8) {
    passwordError.textContent = "password length must be atlest 8";
  }
  passwordError.className - "error active";
}
