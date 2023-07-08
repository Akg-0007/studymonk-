const form = document.getElementById("myform");
const username = document.getElementById("name");
const email = document.getElementById("email");
const numb = document.getElementById("number");
const pass = document.getElementById("pass");
const cpass = document.getElementById("cpass");
// const input = document.getElementsByClassName("form__control");

var span = document.getElementsByClassName("error");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});
function checkInputs() {
  const nameValue = username.value.trim();
  const emailValue = email.value.trim();
  const numbValue = numb.value.trim();
  const passdValue = pass.value.trim();
  const cpassValue = cpass.value.trim();
  if (nameValue === "") {
    showerror(username, "Name cannot be blank");
  } else {
    setsuccess(username);
  }
  if (emailValue === "") {
    showerror(email, "Email cannot be blank");
  }else {
    setsuccess(email);
  }
  if (numbValue === "") {
    showerror(numb, "Phone Number cannot be blank");
  } else {
    setsuccess(numb);
  }
  if (passdValue === "") {
    showerror(pass, "Password cannot be blank");
  } else {
    setsuccess(pass);
  }
  if (cpassValue === "") {
    showerror(cpass, "Password cannot be blank");
  } else {
    setsuccess(cpass);
  }
}
function showerror(input, msg) {
  const formGroup = input.parentElement;
  const error = formGroup.querySelector("span");
  const icon = formGroup.querySelector(".material-icons");
  error.innerText = msg;
  icon.innerText = "clear";
  formGroup.className = "form__group invalid";
}

function setsuccess(input) {
  const formGroup = input.parentElement;
  const icon = formGroup.querySelector(".material-icons");
  icon.innerText = "check";
  formGroup.className = "form__group valid";
}
// function ValidateEmail(email) {

//   var mailformat = "^[A-Za-z0-9+_.-]+@(.+)$"
//   return mailformat.test(email);
// }
