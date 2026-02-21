let cart = JSON.parse(localStorage.getItem("cart")) || [];
let cartOpen = false;

updateCart();

function addToCart(name, price) {
  const existing = cart.find(item => item.name === name);

  if (existing) {
    existing.qty++;
  } else {
    cart.push({ name, price, qty: 1 });
  }

  saveCart();
  updateCart();
}

function removeItem(name) {
  cart = cart.filter(item => item.name !== name);
  saveCart();
  updateCart();
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCart() {
  const cartCount = document.getElementById("cart-count");
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  cartItems.innerHTML = "";
  let total = 0;
  let count = 0;

  cart.forEach(item => {
    total += item.price * item.qty;
    count += item.qty;

    const li = document.createElement("li");
    li.innerHTML = `
      <span>${item.name} (x${item.qty})</span>
      <span>₹${item.price * item.qty}</span>
      <button onclick="removeItem('${item.name}')">✕</button>
    `;
    cartItems.appendChild(li);
  });

  cartTotal.innerText = total;
  cartCount.innerText = count;
}

function toggleCart() {
  document.getElementById("cart").classList.toggle("open");
}
