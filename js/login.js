import getData from "../js/getData.js";
import { Users } from "../js/url.js";

const form = document.querySelector("#loginForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  let name = document.getElementById("name").value;

  let data = await getData(Users);
  console.log("entre al login", name, data);
  data.forEach((element) => {
    if (name === element.name) {
      let dataUser = element;
      sessionStorage.setItem("infoUser", JSON.stringify(dataUser));

      form.reset();
      window.location.href = "../pages/inicio.html";
    }
  });
});
