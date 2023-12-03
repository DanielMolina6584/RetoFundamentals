import postData from "../js/postData.js";
import { Users } from "../js/url.js";

const form = document.querySelector("#regForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  let email = document.getElementById("email").value;
  let name = document.getElementById("name").value;
  let password = document.getElementById("pswd").value;

  let objUser = {
    id: Math.floor(Math.random() * 100),
    name,
    email,
    password,
  };
  
  await postData(Users, objUser);
});