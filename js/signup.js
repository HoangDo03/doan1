// // var user = localStorage.key(1);
// // console.log(user);

// var userArr = [];
// //window.localStorage.setItem('userArr', JSON.stringify(userArr));

// // var Admin = {
// //   username : "admin",
// //   password : "admin",
// //   email: "admin@gmail.com",
// //   usertype : "1"
// // }
// // window.localStorage.setItem('Admin',JSON.stringify(Admin));
// function createAdmin(){
//   // userArr = JSON.parse(localStorage.getItem('userArr'));
// 	if(localStorage.getItem('userArr')==null){		
// 	 //userArray = JSON.parse(localStorage.getItem('user'));
// 		var user={username:'admin' , password: '123',email:'admin@gmail.com',usertype:'admin'};
// 		userArr.push(user);
// 		console.log(userArr);
// 		localStorage.setItem('userArr',JSON.stringify(userArr));
// 	}
// }

// function createNewUser(){
//   userArr = JSON.parse(localStorage.getItem('userArr'));
//    var user = {
//       username:  document.getElementById("username").value,
//       password: document.getElementById("password").value,
//       email: document.getElementById("email").value,
//       usertype : 'kh'
//     }
//     console.log(user);
//     userArr.push(user);
//     // console.log(user);
//     localStorage.setItem('userArr',JSON.stringify(userArr));
//     console.log(userArr);
//     clear();
//   }
//   function ValidateEmail(email)
//   {
//   var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   if(email.value.match(mailformat))
//   {
//     return true;
//   }
//   else
//   {
//    return false;
//   }
//   }


//  let btnSignup = document.querySelector(".btn-signup");
//  let username = document.getElementById("username");
//  let email = document.getElementById("email");
//  let password = document.getElementById("password");




// btnSignup.addEventListener("click", (e) => {
//   e.preventDefault();

//   if (!username.value || !email.value || !password.value) {
//         alert("Please enter full information");
//       } else {
//         if (!ValidateEmail(email)) {
//           alert("You have entered an invalid email address!");
//         }
//         else {
//         createNewUser();
//         alert("Signup successfully");
//         window.location.href="login.html";
// }
// }
// }
// );

//   window.onload = function(){
//     clear();
//     createAdmin(userArr);
//     createNewUser(userArr);
//     }
//   function clear(){
//     document.getElementById('username').value = "";
//     document.getElementById('password').value = "";
//     document.getElementById('email').value = "";
//   }

import {
  getLocalStorage,
  queryElement,
  queryAllElement,
  setLocalStorage,
} from "./need.js";
import { validation } from "./validation.js";


const inputWithIconList = queryAllElement(".input-with-icon");
const form = queryElement(".form-1");
const inputList = form.querySelectorAll(".input__field input");
const signUpBtn = form.querySelector(".btn-signup");


inputWithIconList.forEach((inputWithIcon) => {

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
  })
});

inputList.forEach((input) => {
  input.addEventListener("change", () => validation(input));
  input.addEventListener("blur", () => validation(input));
});

function handleSignUp() {
  let isError = false;
  inputList.forEach((input) => {
      if (validation(input)) isError = true;
  });

  if (isError) {
      window.alert("username or password is invalid!");
      return;
  }

  const userList = getLocalStorage("userArr");
  const cartList = getLocalStorage("cartList");

  const userSignUp = {
      id: Date.now(),
      username: form.querySelector("#username").value,
      email: form.querySelector("#email").value,
      password: form.querySelector("#password").value,
      isAdmin: false,
  };

  const userIdx = userList.findIndex((user) => user.id === userSignUp.id);

  
  if (userIdx === -1) {
      userList.push({
          ...userSignUp,
          cartList,
      });

      setLocalStorage("userArr", userList);
      setLocalStorage("cartList", []),
      setLocalStorage("isLogin", true),
      setLocalStorage("isAdmin", userSignUp.isAdmin);

      // dieu huong nguoi dung den trang chu 
      window.location.assign("login.html");
  } else {
      window.alert("account is already exists.");
  }
}

signUpBtn.addEventListener("click", (e) => {
  e.preventDefault();
  handleSignUp();
})


