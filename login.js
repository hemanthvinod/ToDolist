function validate(callback) {
  var user = document.getElementById("username").value.trim();
  var pass = document.getElementById("password").value.trim();
  if (user == "admin" && pass == "12345") {
    // alert("login success");
    callback();
  } else {
    alert("Wrong credentials! Try Again");
    return false;
  }
}

function check() {
  window.location.href = "todo.html";
}
