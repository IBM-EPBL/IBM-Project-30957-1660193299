function display() {
    var email = document.getElementById("floatingInput").value;
    var pwd = document.getElementById("floatingPassword").value;
    var txt = document.getElementById("txt").value;
    var fwf = document.forms["login"]["fav_web_framework"].value;
    var co = document.forms["login"]["country"].value;

    localStorage.setItem("email", email);
    localStorage.setItem("pwd", pwd);
    localStorage.setItem("txt", txt);
    localStorage.setItem("fwf", fwf);
    localStorage.setItem("co", co);


    if (
      email == "" ||
      pwd == "" ||
      txt == "" ||
      co == "select" ||
      fwf == ""
    ) {
      alert("Please provide the details");
      return false;
    } else {
      return true;
    }
  }