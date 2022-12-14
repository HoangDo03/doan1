
import { product } from "./data.js";

function queryElement(query) {
    return document.querySelector(query);
}

function queryAllElement(query) {
    return document.querySelectorAll(query);
}

const setLocalStorage = (name, value) => {
    window.localStorage.setItem(name, JSON.stringify(value));
};

const getLocalStorage = (name) => {
    return JSON.parse(window.localStorage.getItem(name));
};


if (!getLocalStorage("product"))
  setLocalStorage("product", product);

if (!getLocalStorage("cartList")) setLocalStorage("cartList", []);

if (!getLocalStorage("orderList")) setLocalStorage("orderList", []);


if (!getLocalStorage("userArr")) {
    setLocalStorage("userArr", [
        {
            id: 1,
            username: "admin",
            password: "admin",
            isAdmin: true,
        },
    ]);
}

if (!getLocalStorage("isLogin")) {
    setLocalStorage("isLogin", false);
  }
  
  if (!getLocalStorage("isAdmin")) {
    setLocalStorage("isAdmin", false);
  }
 
export{getLocalStorage,queryElement,queryAllElement, setLocalStorage};