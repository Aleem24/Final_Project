function handleContact() {
  var fullName = document.getElementById("fullname").value;

  var email = document.getElementById("email").value;

  var message = document.getElementById("message").value;

  var snackbar = document.getElementById("snackbar");

  var snackbarText = "";

  var snackbarBG = "#28a7e9";

  if (fullName === "" || email === "" || message === "") {
    snackbarText = `Please enter values ​​for all fields`;

    snackbarBG = "rgb(255, 204, 203)";
  } else {
    snackbar.className = "show";

    snackbarText = `Thanks ${fullName}...Your message has been recorded`;
  }

  snackbar.className = "show";

  snackbar.innerHTML = snackbarText;

  snackbar.style.backgroundColor = snackbarBG;

  setTimeout(function () {
    snackbar.className = snackbar.className.replace("show", "");
  }, 3000);
}
