let cart = [];
let cartOpen = false;

function addToCart(name, price) {
  const existing = cart.find(item => item.name === name);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ name, price, qty: 1 });
  }

  updateCart();
}

function removeItem(name) {
  cart = cart.filter(item => item.name !== name);
  updateCart();
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
      ${item.name} (x${item.qty}) - ₹${item.price * item.qty}
      <button onclick="removeItem('${item.name}')" style="margin-left:10px;background:red;">✕</button>
    `;
    cartItems.appendChild(li);
  });

  cartTotal.innerText = total;
  cartCount.innerText = count;
}

function toggleCart() {
  cartOpen = !cartOpen;
  document.getElementById("cart").classList.toggle("open");
}
