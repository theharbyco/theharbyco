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
