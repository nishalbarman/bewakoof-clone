var applyCoupon = document.getElementById("couponApply"); // redeem coupon section

applyCoupon.addEventListener("click", function (event) {});

// Get the modal

function showCouponModal() {
  var modal = document.getElementById("coupon_modal");
  modal.style.display = "block";
}

// all the modals here

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  var modal = document.getElementById("coupon_modal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
