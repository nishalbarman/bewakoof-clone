const imageContainer = document.querySelector('.image-container');
const scrollArrows = document.querySelectorAll('.scroll-arrow');

function scrollImages(direction) {
    imageContainer.scrollBy({
        left: direction * (537.14 + 20),
        behavior: 'smooth'
    });
}

// ///////////////// No. of products in the cart

var noOfProduct = document.querySelector(".cart_product");



if(noOfProduct.textContent==0){
     noOfProduct.hidden = true;
}

var search = document.querySelector(".search");

var search_input = document.querySelector(".search input");
var color1 = search.style.backgroundColor;
var color2 = search_input.style.backgroundColor;
var border = search.style.border;
var fontSize = search_input.style.fontSize;

search.addEventListener("click" , function(){
    search.style.backgroundColor = "white";
    search_input.style.backgroundColor = "white";
    search.style.border = "1px solid rgba(0,0,0,0.5)"
    search_input.style.fontSize = "15px";
})

