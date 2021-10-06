function show() {
  var password = document.getElementById('password');
  var icon = document.querySelector('.fa-lock');
  if (password.type === "password") {
    password.type = "text";
    password.style.marginTop = "10px";
    icon.style.color = "black";
  } else {
    password.type = "password";
    icon.style.color = "grey"
  }
}