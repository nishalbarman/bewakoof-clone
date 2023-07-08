// var data = [
//   {
//     image_url:
//       "https://images.bewakoof.com/t320/men-s-black-across-the-spiderverse-graphic-printed-oversized-t-shirt-599566-1687765259-1.jpg",
//     name: "Men's Black Across The Spiderverse Graphic Printed Oversized T-shirt",
//     strikeoffPrice: "1000",
//     price: "500",
//     size: "S",
//     quantity: 1,
//   },
//   {
//     image_url:
//       "https://images.bewakoof.com/t1080/men-s-black-t-shirt-106-1665669012-1.jpg",
//     name: "Men's Black T-shirt",
//     strikeoffPrice: "999",
//     price: "399",
//     size: "S",
//     quantity: 2,
//   },
// ];

// localStorage.setItem("cart_product", JSON.stringify(data));

var cartItems = JSON.parse(localStorage.getItem("cart_product")) || [];
// var couponCodes = JSON.parse(localStorage.getItem("bewakoof-cart-coupons"));

var totalItems = document.querySelector("#total-items");
if (cartItems.length == 1) {
  totalItems.innerText = `${cartItems.length} item`;
} else if (cartItems.length > 1) {
  totalItems.innerText = `${cartItems.length} item(s)`;
}

var empty_display = document.getElementById("emptydisplay");
var maincartContainer = document.getElementById("main_cart_container");

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
console.log(cartItems.length);

function displayThings(arr) {
  if (arr.length !== 0) {
    maincartContainer.style.display = "block";
    empty_display.style.display = "none";
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

      var quantity = parseInt(element.quantity);
      var original = parseInt(element.strikeoffPrice);
      var discount = parseInt(element.price);

      var price = quantity * original;
      var dis = quantity * discount;
      var bagdiscount = price - dis;

      originalPrice += price;
      bagDiscount += bagdiscount;
      subtotal += dis;
      totalprice += dis;

      console.log(originalPrice, bagDiscount, subtotal, totalprice);

      localStorage.setItem("bewakoof-cart-total-price", totalprice);

      originalPriceElement.innerText = `₹${originalPrice}`; //original mrp
      totalpriceElement.innerText = `₹ ${totalprice}`; // total price to checkout
      bagdiscountElement.innerText = `- ₹${bagDiscount}`; // bag discount
      subtotalElement.innerText = `₹${subtotal}`; // subtotal

      title.textContent = element.name;
      prices.innerHTML = `<span>₹${dis}</span> <span>₹${price}</span>`;
      priceSaved.innerHTML = `You saved <span>₹${bagdiscount}</span>!`;
      sizeButton.setAttribute("id", "sizeButton");
      sizeButton.innerHTML = `<span>Size :</span> <b> <span id="size">${element.size}</span> </b> <i className="fa-solid fa-angle-down" />`;
      qtyButton.setAttribute("id", "qtyButton");
      qtyButton.innerHTML = `<span>Qty :</span> <b> <span id="qty">${element.quantity}</span> </b> <i className="fa-solid fa-angle-down" />`;
      productImg.setAttribute("src", element.image_url);
      productImg.setAttribute("alt", element.name);
      removeButton.textContent = "Remove";
      wishListButton.textContent = "Move to Wishlist";
      bottomSection.setAttribute("class", "bottom_section");
      removeButton.setAttribute("id", "removeButton");
      removeButton.setAttribute("class", "remove_button");
      wishListButton.setAttribute("id", "wishList");
      wishListButton.setAttribute("class", "move_to_wishlist");

      sizeButton.addEventListener("click", function (event) {
        showSizeModal(index);
      });

      qtyButton.addEventListener("click", function (event) {
        showQtyModal(index);
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
        cartItems.splice(index, 1);
        if (cartItems.length == 1) {
          totalItems.innerText = `${cartItems.length} item`;
        } else if (cartItems.length > 1) {
          totalItems.innerText = `${cartItems.length} item(s)`;
        }
        localStorage.setItem("cart_product", JSON.stringify(cartItems));

        originalPrice = 0;
        bagDiscount = 0;
        subtotal = 0;
        totalprice = 0;
        displayThings(cartItems);
      });
    });
    offerApply(localStorage.getItem("offer-applied"));
  } else {
    originalPrice = 0;
    bagDiscount = 0;
    subtotal = 0;
    totalprice = 0;
    originalPriceElement.innerText = `₹${originalPrice}`; //original mrp
    totalpriceElement.innerText = `₹ ${totalprice}`; // total price to checkout
    bagdiscountElement.innerText = `- ₹${bagDiscount}`; // bag discount
    subtotalElement.innerText = `₹${subtotal}`; // subtotal
    localStorage.setItem("bewakoof-cart-total-price", totalprice);

    empty_display.style.display = "flex";
    maincartContainer.style.display = "none";
  }
}

var checkoutBtn = document.getElementById("continuePayment");
checkoutBtn.addEventListener("click", function () {
  document.location = "./payment.html";
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
      if (localStorage.getItem("offer-applied")) {
        var erroBox = document.getElementById("error_coupon_holder");
        erroBox.textContent = "Offer Already Applied";
        erroBox.style.display = "block";
      } else {
        offerApply("true");
        dissmissCouponModal();
        showCouponAppliedModal();
      }
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

    console.log(dis);
    bagDiscount += dis;
    console.log(bagDiscount);
    subtotal -= dis;
    totalprice -= dis;

    totalpriceElement.innerText = `₹ ${Math.floor(totalprice)}`;
    bagdiscountElement.innerText = `- ₹${Math.floor(bagDiscount)}`;
    subtotalElement.innerText = `₹${Math.floor(subtotal)}`;
    localStorage.setItem("bewakoof-cart-total-price", totalprice);
    couponNotification();
  }
}

// Get the modal

function showCouponModal() {
  var modal = document.getElementById("coupon_modal");
  modal.style.display = "block";
}

function showSizeModal(index) {
  var sizemodal = document.getElementById("size_modal");
  sizemodal.style.display = "block";
  var allP = document.querySelectorAll(".size_model_container>p:first-child~p");
  allP.forEach(function (element) {
    element.addEventListener("click", function () {
      cartItems[index].size = element.innerText;
      localStorage.setItem("cart_product", JSON.stringify(cartItems));
      originalPrice = 0;
      bagDiscount = 0;
      subtotal = 0;
      totalprice = 0;
      displayThings(cartItems);
      dissmisSizeModal();
    });
  });
}

function showQtyModal(index) {
  var qty_modal = document.getElementById("qty_modal");
  qty_modal.style.display = "block";
  var allP = document.querySelectorAll(".qty_model_container>p:first-child~p");
  allP.forEach(function (element) {
    element.addEventListener("click", function () {
      cartItems[index].quantity = +element.innerText;
      localStorage.setItem("cart_product", JSON.stringify(cartItems));
      originalPrice = 0;
      bagDiscount = 0;
      subtotal = 0;
      totalprice = 0;
      displayThings(cartItems);
      dissmisQtyModal();
    });
  });
}

function showCouponAppliedModal() {
  var modal = document.getElementById("coupon_thank_you");
  modal.style.display = "block";
  setInterval(dissmissCouponAppliedModal, 750);
}

// all the modals here

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  var modal = document.getElementById("coupon_modal");
  var sizemodal = document.getElementById("size_modal");
  var qty_modal = document.getElementById("qty_modal");
  var couponThankModal = document.getElementById("coupon_thank_you");

  if (event.target == modal) {
    modal.style.display = "none";
  } else if (event.target == sizemodal) {
    sizemodal.style.display = "none";
  } else if (event.target == qty_modal) {
    qty_modal.style.display = "none";
  } else if (event.target == couponThankModal) {
    couponThankModal.style.display = "none";
  }
};

function dissmissCouponModal() {
  var modal = document.getElementById("coupon_modal");
  modal.style.display = "none";
}

function dissmissCouponAppliedModal() {
  var modal = document.getElementById("coupon_thank_you");
  modal.style.display = "none";
}

function dissmisSizeModal() {
  var sizemodal = document.getElementById("size_modal");
  sizemodal.style.display = "none";
}

function dissmisQtyModal() {
  var qty_modal = document.getElementById("qty_modal");
  qty_modal.style.display = "none";
}

function homePage() {
  document.location = "./index.html";
}

function couponNotification() {
  var appendTo = document.getElementById("couponApplied");
  appendTo.innerHTML = "";
  var coupon_card = document.createElement("div");

  var coupon_title_flex = document.createElement("div");

  var title_coupon_check = document.createElement("div");

  var image = document.createElement("img");

  var coupon_title = document.createElement("p");

  var coupon_code = document.createElement("span");

  var removeBtn = document.createElement("span");

  var notification = document.createElement("p");

  coupon_card.classList.add("coupon_card");
  coupon_title_flex.classList.add("cpn_title_flex");
  title_coupon_check.classList.add("title_coupon_check");

  image.setAttribute(
    "src",
    "https://images.bewakoof.com/web/teenyicons-tick-circle-solid-1614248395.png"
  );
  image.setAttribute("alt", "coupon_applied");

  coupon_title.textContent = "Coupon Applied ";
  coupon_title.setAttribute("id", "cpn_title");
  coupon_code.textContent = "MASAI20";
  coupon_code.classList.add("coupon_code");
  removeBtn.innerText = "REMOVE";
  removeBtn.setAttribute("id", "removeBtn");

  removeBtn.addEventListener("click", function () {
    event.target.parentNode.parentNode.remove();
    localStorage.removeItem("offer-applied");
    originalPrice = 0;
    bagDiscount = 0;
    subtotal = 0;
    totalprice = 0;
    displayThings(cartItems);
  });

  notification.textContent =
    "Discount of 20% has been added to your cart enjoy your shoping.";

  coupon_title.append(coupon_code);

  title_coupon_check.append(image, coupon_title);

  coupon_title_flex.append(title_coupon_check, removeBtn);
  coupon_card.append(coupon_title_flex, notification);
  appendTo.append(coupon_card);
}
