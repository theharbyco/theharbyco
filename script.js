let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(product, price) {
  cart.push({product, price});
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert(product + " added to cart!");
}

function updateCartCount() {
  document.getElementById("cart-count").innerText = cart.length;
}

function viewCart() {
  let message = "Your Cart:\n\n";
  let total = 0;

  cart.forEach(item => {
    message += item.product + " - ₹" + item.price + "\n";
    total += item.price;
  });

  message += "\nTotal: ₹" + total;
  alert(message);
}

updateCartCount();
