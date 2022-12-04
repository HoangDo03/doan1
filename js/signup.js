// var user = localStorage.key(1);
// console.log(user);

var userArr = [];
//window.localStorage.setItem('userArr', JSON.stringify(userArr));

// var Admin = {
//   username : "admin",
//   password : "admin",
//   email: "admin@gmail.com",
//   usertype : "1"
// }
// window.localStorage.setItem('Admin',JSON.stringify(Admin));
function createAdmin(){
  // userArr = JSON.parse(localStorage.getItem('userArr'));
	if(localStorage.getItem('userArr')==null){		
	 //userArray = JSON.parse(localStorage.getItem('user'));
		var user={username:'admin' , password: '123',email:'admin@gmail.com',usertype:'admin'};
		userArr.push(user);
		console.log(userArr);
		localStorage.setItem('userArr',JSON.stringify(userArr));
	}
}

function createNewUser(){
  userArr = JSON.parse(localStorage.getItem('userArr'));
   var user = {
      username:  document.getElementById("username").value,
      password: document.getElementById("password").value,
      email: document.getElementById("email").value,
      usertype : 'kh'
    }
    console.log(user);
    userArr.push(user);
    // console.log(user);
    localStorage.setItem('userArr',JSON.stringify(userArr));
    console.log(userArr);
    clear();
  }
  function ValidateEmail(email)
  {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(email.value.match(mailformat))
  {
    return true;
  }
  else
  {
   return false;
  }
  }


 let btnSignup = document.querySelector(".btn-signup");
 let username = document.getElementById("username");
 let email = document.getElementById("email");
 let password = document.getElementById("password");




btnSignup.addEventListener("click", (e) => {
  e.preventDefault();

  if (!username.value || !email.value || !password.value) {
        alert("Please enter full information");
      } else {
        if (!ValidateEmail(email)) {
          alert("You have entered an invalid email address!");
        }
        else {
        createNewUser();
        alert("Signup successfully");
        window.location.href="login.html";
}
}
}
);

  window.onload = function(){
    clear();
    createAdmin(userArr);
    createNewUser(userArr);
    }
  function clear(){
    document.getElementById('username').value = "";
    document.getElementById('password').value = "";
    document.getElementById('email').value = "";
  }