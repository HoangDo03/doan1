
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let btnSignup = document.querySelector(".btn-signup");
let btnLogin = document.querySelector(".btn-login");

btnSignup.addEventListener("click", (e) => {
  e.preventDefault();
  let user = {
    username: username.value,
    email: email.value,
    password: password.value,
  };
  let json1 = JSON.stringify(user);
  if (!username.value || !email.value || !password.value) {
    alert("Please enter full information");
  } else {
    localStorage.setItem(username.value, json1);
    alert("Signup successfully");
    window.location.href="login.html";
  }
});



btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  let user = {
    username: username.value,
    email: email.value,
    password: password.value,
  };
  console.log(user);
  let json = JSON.stringify(user);
  if (localStorage.getItem(username.value) != json) {
    alert("The information entered is incorrect"); 
}
  if (!username.value || !email.value || !password.value) {
    alert("Please enter full information");  
  }

  if (localStorage.getItem(username.value) == json) {
    alert("Login successfully");
    window.location.href = "index.html";
  } else {
    alert("Login failed");
    window.location.href="login.html";
  }
});

// btnLogin.addEventListener("click", (e) => {
//   e.preventDefault();
//   // const admin = {
//   //   username: "admin",
//   //   email: "admin@gmail.com",
//   //   password : "123"
//   // }
//   let user = {
//     username: username.value,
//     email: email.value,
//     password: password.value,
//   };
//   console.log(user);
//   console.log(admin);
//   alert(admin)
//   let json = JSON.stringify(admin);
//   let json1 = JSON.stringify(user);

//   if (localStorage.getItem(username.value) != json || localStorage.getItem(username.value) != json1) {
//     alert("The information entered is incorrect"); 
// }
//   if (!username.value || !email.value || !password.value) {
//     alert("Please enter full information");  
//   }

//   if (localStorage.getItem(username.value) == json1) {
//     alert("Login successfully");
//     window.location.href = "index.html";
//   } 
//   // else if(localStorage.getItem(username.value) == json){
//   //   window.location.href = "index.html";
//   // }
//   else {
//     alert("Login failed");
//     window.location.href="login.html";
// }
// });

// function login() {
//   let username = document.getElementById("username").value;
//  let email = document.getElementById("email").value;
//   let password = document.getElementById("password").value;
//   let checkLogin = listAccount.some(value => value.username === username && value.password === password && value.email === email)
//   console.log(checkLogin)
//   if(checkLogin){
//     localStorage.setItem("token",username)
//   } else {"wrong username or password!"}
// }

// function checkLogin(){
//   if(islogin)
//   {
//     window.location.href = "../html/index.html"
//   }
// }

// if (options.form === "#form-1") {
//   var arrayInfos = JSON.parse(localStorage.getItem("infor"));
//   var check = false;
//   arrayInfos.forEach((e) => {
//     if (e.email === `${formValues.email}`) {
//       alert("Email da ton tai!!");
//       check = true;
//     }
//   });
//   if (check === false) {
//     idPerson = arrayInfos.length + 1;
//     arrayInfos.push({
//       id: arrayInfos.length + 1,
//       fullname: formValues.fullname,
//       email: formValues.email,
//       password: formValues.password,
//     });
//     console.log(arrayInfos.length + 1);
//     if (flag === false) {
//     }
//     validation1.classList.remove("active");
//     toastSuccess.classList.add("active");
//     signInOut.classList.add("active");
//     userAvatar.classList.add("active");
//     setAccountLocalStorage(arrayInfos);
//     checkSinginBuyPro = true;
//   }
// }
// options.onSubmit(arrayInfo);

// if (options.form === "#form-2") {
//   if (
//     formValues.email == "admin@gmail.com" &&
//     formValues.password == "admin123"
//   ) {
//     location.href = "Admin.html";
//   } else {
//     var flag = true;
//     var arrayInfos = JSON.parse(localStorage.getItem("infor"));
//     arrayInfos.forEach((e) => {
//       if (
//         e.email === `${formValues.email}` &&
//         e.password === `${formValues.password}`
//       ) {
//         validation2.classList.remove("active");
//         $(".message-text").innerHTML = "Login Successfully! ";
//         toastSuccess.classList.add("active");
//         signInOut.classList.add("active");
//         userAvatar.classList.add("active");
//         avatarMoblie.classList.add("active");
//         myOrderMobile.classList.add("active");
//         logoutMobile.classList.add("active");
//         flag = false;
//         checkSinginBuyPro = true;

//         idPerson = e.id;

//         var arrayHis = JSON.parse(localStorage.getItem("hisOrder"));

//         for (var i = 0; i < arrayHis.length; i++) {
//           if (arrayHis[i].idPerson == e.id) {
//             hisOrderUser(
//               arrayHis[i].id,
//               arrayHis[i].size,
//               arrayHis[i].details,
//               arrayHis[i].date,
//               arrayHis[i].cost,
//               arrayHis[i].status
//             );
//           }
//         }
//         var moneyBill = $$(".money-bill-item");
//         sum = 0;
//         var toltalAllMoney = $(".total-all-money");
//         for (i = 0; i < moneyBill.length; i++) {
//           sum = Number(sum) + Number(moneyBill[i].innerText);
//                   }
//                   toltalAllMoney.innerHTML = `$` + sum + `.00`;
//                 }
//               });
//               if (flag == true) {
//                 toastFail.classList.add("active");
//               }
//             }
//           }


