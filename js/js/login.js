let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let btnLogin = document.querySelector(".btn-login");

const admin = [
  {
    username: "admin",
    email: "admin@gmail.com",
    password: "123",
  }
]
let isAdmin = !!localStorage.getItem("admin");
function CheckLogin_admin(){
  if(isAdmin){
    window.location.href = "index.html";
    
  }
}

function loginAdmin() {
  let admin_name = username.value ;
  let admin_email = email.value;
  let admin_password = password.value;
  let checkLogin = admin.some(value => value.username === admin_name && value.email === admin_email && value.password === admin_password);
  if(checkLogin){
    localStorage.setItem("admin", admin_name)
    //gia tri mac dinh ban dau la false
    // isAdmin = true 
    CheckLogin_admin()
  } 
  // else{
  //   alert("wrong username or password!")
  // }
}
// btnLogin.addEventListener("click", (e) => {
//   e.preventDefault();
//   let user = {
//     username: username.value,
//     email: email.value,
//     password: password.value,
//   };
//   console.log(user);
//   let json = JSON.stringify(user);
//   if (localStorage.getItem(username.value) != json) {
//     alert("The information entered is incorrect"); 
// }
//   if (!username.value || !email.value || !password.value) {
//     alert("Please enter full information");  
//   }

//   if (localStorage.getItem(username.value) == json) {
//     alert("Login successfully");
//     window.location.href = "index.html";
//   } else {
//     alert("Login failed");
//     window.location.href="login.html";
//   }
// });

// var admin_name = 'admin' , admin_email = 'admin1@gmail.com' , admin_password = '123';
btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  let user = {
    username: username.value,
    email: email.value,
    password: password.value,
  };
  console.log(user);
  let json = JSON.stringify(user);
  console.log(admin);
  let admin1 = JSON.stringify(admin);
  // if(username.value == admin_name && email.value == admin_email && password.value == admin_password){
  //   alert("Hello admin")
  //   window.location.href = "index.html";
  // }
  if (localStorage.getItem(username.value) == json) {
        alert("Login successfully");
        window.location.href = "index.html";
      } else if(loginAdmin){
        alert('Hello admin!')
        document.getElementById('btn-admin').style.display = "block";
      }
      else {
        alert("Login failed");
        window.location.href="login.html";
      }
  
});
