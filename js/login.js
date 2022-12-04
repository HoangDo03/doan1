function setDefaultAccount() {
  accounts = [{
          isAdmin: false,
          isUser: false,
          isLogout: true
      },
      {
          Name: 'user',
          Email: 'user',
          Password: 'user'
      }
  ]};


document.querySelector(".btn.btn-login").addEventListener("click", (e) => {
	e.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  // var email = document.getElementById("email").value;
  let arruser = JSON.parse(localStorage.getItem("userArr"));
  let user = arruser.find(item => item.username ==username );
  if(user) {
    if(user.password ==password && user.usertype == 'kh') {
      alert('khach hang');
      let isUser = true;
      window.location.href = "index.html";
      document.getElementById(change).classList.add('account1')
      //document.getElementById('btn-admin').style.display="none"
    } else if(user.password == password && user.usertype =='admin'){
      alert("admin");
      let isAdmin = true;
      window.location.href = "index.html";
    } else{
      alert('sai mat khau!')
    }
  } else {
    alert("Tai khoan khong ton tai !")
  }
})



// const createAccount = () => {
// 	myAccount = [
// 		{
// 			userName : "xuanhoang",
// 			password : "xuanhoang",
// 			email : "xuanhoang@gmail.com"
// 		}
// 	]
// 	localStorage.setItem("myAccount", JSON.stringify(myAccount));
// }

// createAccount();