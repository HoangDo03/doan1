
import {
  getLocalStorage,
  queryElement,
  setLocalStorage,
} from "./need.js";
import { validation } from "./validation.js";

const form = queryElement(".form-2");
const inputList = form.querySelectorAll(".input__field input");
const LoginBtn = form.querySelector(".btn-login");
const inputWithIcon = queryElement(".input-with-icon");
const eyeIcon = inputWithIcon.querySelector(".fa-eye");
const eyeSlashIcon = inputWithIcon.querySelector(".fa-eye-slash");
const inputPassword = inputWithIcon.querySelector("input");

inputWithIcon.addEventListener("click", (e) => {
  if (e.target.className.includes("hide-password")) {
      eyeIcon.classList.remove("hidden");
      eyeSlashIcon.classList.add("hidden");
      inputPassword.type = "text";
  }

  if (e.target.className.includes("show-password")) {
      inputWithIcon.querySelector(".hidden").classList.remove("hidden");
      e.target.classList.add("hidden");
      inputPassword.type = "password";
  }
});

inputList.forEach((input) => {
  input.addEventListener("change", () => validation(input));
  input.addEventListener("blur", () => validation(input));
});


function handleLogin() {
  let isError = false;
  inputList.forEach((input) => {
      if (validation(input)) isError = true;
  });

  if (isError) {
      window.alert("error!");
      return;
  }

  const userList = getLocalStorage("userArr");

  const userIdx = userList.findIndex(
      (user) =>
          user.username === form.querySelector("#username").value &&
          user.password === form.querySelector("#password").value
  );

  if (userIdx !== -1) {
      setLocalStorage("isLogin", true);
      setLocalStorage("isAdmin", userList[userIdx].isAdmin);
      if (userList[userIdx].isAdmin) {
          window.location.assign("../html/index.html");
      }
      else {
          window.location.assign("../html/index.html");
      }
  } else window.alert("username or password is invalid!!!");

}

LoginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  handleLogin();
})
