import {
    getLocalStorage,
    queryElement,
    setLocalStorage,
  } from "./need.js";
  
  const auth = queryElement(".menuright-auth");
  const Login = auth.querySelector(".login");
  const signUp = auth.querySelector(".signup");
  const signOut = auth.querySelector(".signout");
  const ad = auth.querySelector(".ad");
  const isLogin = getLocalStorage("isLogin");
  const isAdmin = getLocalStorage("isAdmin");
  
  if (isLogin) {
    signOut.classList.remove("hidden");
    Login.classList.add("hidden");
    signUp.classList.add("hidden");
  } else {
    signOut.classList.add("hidden");
    ad.classList.add("hidden");
    Login.classList.remove("hidden");
    signUp.classList.remove("hidden");
  }

  if (isAdmin){
    ad.classList.remove("hidden");
  }
  else {
    ad.classList.add("hidden");
  }


  signOut.addEventListener("click", () => {
    setLocalStorage("isLogin", false);
    setLocalStorage("isAdmin", false);
    window.location.assign("index.html");
  });
  