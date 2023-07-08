var form = document.querySelector("form");

form.addEventListener("submit", function () {
  var p1 = document.querySelector(".p1").value;
  var p2 = document.querySelector(".p2").value;
  var p3 = document.querySelector(".p3").value;
  var p4 = document.querySelector(".p4").value;
  var p5 = document.querySelector(".p5").value;
  var p6 = document.querySelector(".p6").value;
  if (p2 == "" || p3 == "" || p4 == "" || p5 == "" || p6 == "") {
    alert("Please Fill all the input fields!");
  } else {
    alert("Payment Sucessfull");
    alert("You are being redirected to Home Page!");
    window.location.assign("./index.html");
  }
});
