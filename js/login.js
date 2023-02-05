const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const h1 = document.querySelector("#welcome");

const HIDDEN_CLASSNAME ="hidden";
const USERNAME_KEY = "username";

function loginSubmit(event){
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY,username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  welcome(username);
}

function welcome(username){
  h1.innerText = `Hello ${username}`;
  h1.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername===null){
loginForm.classList.remove(HIDDEN_CLASSNAME);
loginForm.addEventListener("submit",loginSubmit);
}else{
  welcome(savedUsername);

}

