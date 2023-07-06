var obj = {
  imgurl:
    "https://images.bewakoof.com/t320/men-s-black-across-the-spiderverse-graphic-printed-oversized-t-shirt-599566-1687765259-1.jpg",
  title: "Men's Black Across The Spiderverse Graphic Printed Oversized T-shirt",
  originalPrice: 1000,
  discountPrice: 500,
  size: "S",
  quantity: 1,
};

var obj2 = {
  imgurl:
    "https://images.bewakoof.com/t1080/men-s-black-t-shirt-106-1665669012-1.jpg",
  title: "Men's Black T-shirt",
  originalPrice: 999,
  discountPrice: 399,
  size: "S",
  quantity: 2,
};

var cartItems = JSON.parse(localStorage.getItem("bewakoof-cart-items")) || [
  obj,
  obj2,
];
var couponCodes = JSON.parse(localStorage.getItem("bewakoof-cart-coupons"));

var cardAppend = document.getElementById("cart-append");
// cardAppend.innerHTML=""

var subtotalElement = document.getElementById("subtotal");
var bagdiscountElement = document.getElementById("bagdiscount");
var totalpriceElement = document.getElementById("totalprice");
var originalPriceElement = document.getElementById("originalprice");

// var subtotal = +subtotalElement.innerText;
// var bagDiscount = +bagdiscountElement.innerText;
// var totalprice = +totalpriceElement.innerText;

var subtotal = 0;
var bagDiscount = 0;
var totalprice = 0;
var originalPrice = 0;

var applyCoupon = document.getElementById("couponApply"); // redeem coupon section

applyCoupon.addEventListener("click", function (event) {
  showCouponModal();
});

displayThings(cartItems);

function displayThings(arr) {
  cardAppend.innerHTML = "";
  arr.forEach(function (element, index) {
    var divChild = document.createElement("div");
    var divUpper = document.createElement("div");
    var cartContent = document.createElement("div");
    var title = document.createElement("p");
    var prices = document.createElement("p");
    var priceSaved = document.createElement("p");
    var btnQuanSize = document.createElement("div");
    var sizeButton = document.createElement("div");
    var qtyButton = document.createElement("div");
    var imageContainer = document.createElement("div");
    var productImg = document.createElement("img");
    var bottomSection = document.createElement("div");
    var removeButton = document.createElement("div");
    var wishListButton = document.createElement("div");

    divChild.setAttribute("class", "child");
    divUpper.setAttribute("class", "upper");
    btnQuanSize.setAttribute("class", "qp");

    var quantity = element.quantity;
    var original = element.originalPrice;
    var discount = element.discountPrice;

    var price = quantity * original;
    var dis = quantity * discount;
    var bagdiscount = price - dis;

    originalPrice += original;
    bagDiscount += bagdiscount;
    subtotal += dis;
    totalprice += dis;

    localStorage.setItem("bewakoof-cart-total-price", totalprice);

    originalPriceElement.innerText = `₹${originalPrice}`; //original mrp
    totalpriceElement.innerText = `₹ ${totalprice}`; // total price to checkout
    bagdiscountElement.innerText = `- ₹${bagDiscount}`; // bag discount
    subtotalElement.innerText = `₹${subtotal}`; // subtotal

    title.textContent = element.title;
    prices.innerHTML = `<span>₹${dis}</span> <span>₹${price}</span>`;
    priceSaved.innerHTML = `You saved <span>₹${bagdiscount}</span>!`;
    sizeButton.setAttribute("id", "sizeButton");
    sizeButton.innerHTML = `<span>Size :</span> <b> <span id="size">${element.size}</span> </b> <i className="fa-solid fa-angle-down" />`;
    qtyButton.setAttribute("id", "qtyButton");
    qtyButton.innerHTML = `<span>Qty :</span> <b> <span id="qty">${element.quantity}</span> </b> <i className="fa-solid fa-angle-down" />`;
    productImg.setAttribute("src", element.imgurl);
    productImg.setAttribute("alt", element.title);
    removeButton.textContent = "Remove";
    wishListButton.textContent = "Move to Wishlist";
    bottomSection.setAttribute("class", "bottom_section");
    removeButton.setAttribute("id", "removeButton");
    removeButton.setAttribute("class", "remove_button");
    wishListButton.setAttribute("id", "wishList");
    wishListButton.setAttribute("class", "move_to_wishlist");

    sizeButton.addEventListener("click", function () {
      showSizeModal();
    });

    qtyButton.addEventListener("click", function () {
      showQtyModal();
    });

    // appending start here
    btnQuanSize.append(sizeButton, qtyButton);
    bottomSection.append(removeButton, wishListButton);
    cartContent.append(title, prices, priceSaved, btnQuanSize);
    imageContainer.append(productImg);
    divUpper.append(cartContent, imageContainer);
    divChild.append(divUpper, bottomSection);
    cardAppend.append(divChild);

    removeButton.addEventListener("click", function (event) {
      event.target.parentNode.parentNode.remove();
    });
  });
}

var checkoutBtn = document.getElementById("continuePayment");
checkoutBtn.addEventListener("click", function () {
  document.location = "./payment.html/cart-checkout";
});

var couponForm = document.getElementById("coupon-form");
couponForm.addEventListener("submit", function (event) {
  event.preventDefault();
  var code = event.target.cpn_code.value;
  if (code === "") {
    var erroBox = document.getElementById("error_coupon_holder");
    erroBox.textContent = "Empty Field";
    erroBox.style.display = "block";
  } else {
    if (code === "MASAI20") {
      offerApply("true");
      dissmissCouponModal();
    } else {
      var erroBox = document.getElementById("error_coupon_holder");
      erroBox.textContent = "Invalid Code";
      erroBox.style.display = "block";
    }
  }
});

function offerApply(status) {
  if (status == "true") {
    localStorage.setItem("offer-applied", "true");

    var dis = (totalprice * 30) / 100;

    bagDiscount += dis;
    subtotal -= dis;
    totalprice -= dis;

    totalpriceElement.innerText = `₹ ${Math.floor(totalprice)}`;
    bagdiscountElement.innerText = `- ₹${Math.floor(bagDiscount)}`;
    subtotalElement.innerText = `₹${Math.floor(subtotal)}`;
  }
}

// Get the modal

function showCouponModal() {
  var modal = document.getElementById("coupon_modal");
  modal.style.display = "block";
}

function showSizeModal() {
  var sizemodal = document.getElementById("size_modal");
  sizemodal.style.display = "block";
}

function showQtyModal() {
  var qty_modal = document.getElementById("qty_modal");
  qty_modal.style.display = "block";
}

// all the modals here

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  var modal = document.getElementById("coupon_modal");
  var sizemodal = document.getElementById("size_modal");
  var qty_modal = document.getElementById("qty_modal");
  if (event.target == modal) {
    modal.style.display = "none";
  } else if (event.target == sizemodal) {
    sizemodal.style.display = "none";
  } else if (event.target == qty_modal) {
    qty_modal.style.display = "none";
  }
};

function dissmissCouponModal() {
  var modal = document.getElementById("coupon_modal");
  modal.style.display = "none";
}

window.onload = function () {
  offerApply(localStorage.getItem("offer-applied"));
};
