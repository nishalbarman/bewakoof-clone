var noOfProduct = document.querySelector(".cart_product");

var cart = JSON.parse(localStorage.getItem("cart_product")) || [];

noOfProduct.innerText = cart.length;

if (noOfProduct.textContent == 0) {
  noOfProduct.hidden = true;
}

var search = document.querySelector(".search");

var search_input = document.querySelector(".search input");
var color1 = search.style.backgroundColor;
var color2 = search_input.style.backgroundColor;
var border = search.style.border;
var fontSize = search_input.style.fontSize;

search.addEventListener("click", function () {
  search.style.backgroundColor = "white";
  search_input.style.backgroundColor = "white";
  search.style.border = "1px solid rgba(0,0,0,0.5)";
  search_input.style.fontSize = "15px";
});

document
  .querySelector("img[alt='bewakoof_logo']")
  .addEventListener("click", function () {
    console.log("index");
    window.location.assign("/index.html");
  });

document.querySelector("#cart_clicked").addEventListener("click", function () {
  window.location.assign("/cart.html");
});

document.getElementById("login").addEventListener("click", function () {
  window.location.assign("./signup.html");
});
