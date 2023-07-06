# fancy-thunder-426

# Cart page

Cart is an option for users to store their liked product in a bucket, just like using a bag when we go for shopping on a mall. Thats how cart is. This cart is the clone from the bewakoof.com websites cart. Basically we are 5 team members contributing to create a clone of bewakoof.com.

# cart Object structure

`var obj = {
  imgurl:
    "https://images.bewakoof.com/t320/men-s-black-across-the-spiderverse-graphic-printed-oversized-t-shirt-599566-1687765259-1.jpg",
  title: "Men's Black Across The Spiderverse Graphic Printed Oversized T-shirt",
  original pricee: 1000,
  discountPrice: 500,
  size: "S",
  quantity: 1,
};`

# Local Storage Key's

    * Total price =  'bewakoof-cart-total-price'
      Which can be accessed by `localStorage.getItem("bewakoof-cart-total-price");`

# Child card code that is made using jvascript

`<div class="child">

<div class="upper">
<div>
<p>Men's Black Across The Spiderverse Graphic Printed Oversized T-shirt</p>
<p><span>₹649</span> <span>₹1299</span></p>
<p>You saved <span>₹650</span>!</p>

                                <!-- quantity and size div  -->
                                <div class="qp">
                                    <div id="sizeButton">
                                        <span>Size :</span>
                                        <b>
                                            <span id="size">S</span>
                                        </b>
                                        <i class="fa-solid fa-angle-down"></i>
                                    </div>

                                    <div id="qtyButton">
                                        <span>Qty :</span>
                                        <b>
                                            <span id="qty">1</span>
                                        </b>
                                        <i class="fa-solid fa-angle-down"></i>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img src="https://images.bewakoof.com/t320/men-s-black-across-the-spiderverse-graphic-printed-oversized-t-shirt-599566-1687765259-1.jpg"
                                    alt="product" />
                            </div>
                        </div>
                        <!-- Remove and Wishlist button  -->
                        <div class="bottom_section">
                            <div id="removeButton" class="remove_button">
                                Remove
                            </div>
                            <div id="wishList" class="move_to_wishlist"> Move to Wishlist</div>
                        </div>
                    </div>`
