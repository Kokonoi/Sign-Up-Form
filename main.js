const password = document.getElementById("pass");
const confirmPassword = document.getElementById("confirmPass");

function checkPasswords() {
  if (confirmPassword.value === "") {
    return;
  } else if (password.value !== confirmPassword.value) {
    password.setCustomValidity("Passwords don't match");
    password.style.borderColor = "red";
    confirmPassword.style.borderColor = "red";
  } else if (password.value === confirmPassword.value) {
    password.style.borderColor = "blue";
    confirmPassword.style.borderColor = "blue";
  }
}
password.addEventListener("input", () => {
  checkPasswords();
});
confirmPassword.addEventListener("input", () => {
  checkPasswords();
});
