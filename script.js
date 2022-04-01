const password = document.querySelector("#password");
const confirm = document.querySelector("#confirmPass");
let passmiss = document.querySelector(".passMis");
const button = document.querySelector("button");
button.addEventListener("click", (e) => {
  console.log(e);
  if (password.value == confirm.value) {
    passmiss.classList.remove("error");
    password.classList.remove("error1");
    confirm.classList.remove("error1");
  } else {
    passmiss.classList.add("error");
    password.classList.add("error1");
    confirm.classList.add("error1");
    e.preventDefault();
  }
});
