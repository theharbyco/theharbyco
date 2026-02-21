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
let cart = [];
let cartOpen = false;

function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
}

function updateCart() {
  document.getElementById("cart-count").innerText = cart.length;

  let items = document.getElementById("cart-items");
  let total = 0;
  items.innerHTML = "";

  cart.forEach(item => {
    let li = document.createElement("li");
    li.innerText = item.name + " - ₹" + item.price;
    items.appendChild(li);
    total += item.price;
  });

  document.getElementById("cart-total").innerText = total;
}

function toggleCart() {
  cartOpen = !cartOpen;
  document.getElementById("cart").classList.toggle("open");
}
