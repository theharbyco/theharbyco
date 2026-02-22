let books = [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];

fetch("data/books.json")
  .then(r => r.json())
  .then(d => { books = d; renderBooks(); updateCartCount(); });
let categories = ["All"];

books.forEach(b => {
  if (!categories.includes(b.cat)) categories.push(b.cat);
});

const select = document.getElementById("categoryFilter");
select.innerHTML = categories.map(c =>
  `<option value="${c}">${c}</option>`
).join("");

function renderBooks() {
  const list = document.getElementById("book-list");
  if(!list) return;

  const search = searchInput.value.toLowerCase();
  const cat = categoryFilter.value;
  const sort = sortPrice.value;

  let filtered = books.filter(b =>
    (cat === "All" || b.cat === cat) &&
    b.name.toLowerCase().includes(search)
  );

  if(sort === "low") filtered.sort((a,b)=>a.price-b.price);
  if(sort === "high") filtered.sort((a,b)=>b.price-a.price);

  list.innerHTML = "";

  filtered.forEach(b=>{
    let off = Math.round((b.mrp-b.price)/b.mrp*100);
    list.innerHTML += `
      <div class="card">
        ${b.tag ? `<span class="badge">${b.tag}</span>`:""}
        <img src="https://source.unsplash.com/300x400/?book">
        <h3>${b.name}</h3>
        <p>${b.cat}</p>
        <div class="price">
          <span class="mrp">₹${b.mrp}</span>
          <b>₹${b.price}</b>
          <div class="off">${off}% OFF</div>
        </div>
        <button onclick="addToCart('${b.name}',${b.price})">Add to Cart</button>
      </div>
    `;
  });
}

function addToCart(name,price){
  let item = cart.find(i=>i.name===name);
  if(item) item.qty++;
  else cart.push({name,price,qty:1});
  saveCart();
}

function saveCart(){
  localStorage.setItem("cart",JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount(){
  let c = document.getElementById("cart-count");
  if(c) c.innerText = cart.reduce((a,b)=>a+b.qty,0);
}

function toggleTheme(){
  document.body.classList.toggle("dark");
}
const books = [
  { name: "Atomic Habits", cat: "Self-Help", mrp: 699, price: 649 },
  { name: "Rich Dad Poor Dad", cat: "Finance", mrp: 499, price: 449 }
];

const bookContainer = document.getElementById("books");

books.forEach(book => {
  bookContainer.innerHTML += `
    <div class="book-card">
      <img src="https://source.unsplash.com/300x400/?book,${book.name}">
      <h3>${book.name}</h3>
      <p>${book.cat}</p>
      <p class="price">
        <span class="mrp">₹${book.mrp}</span> ₹${book.price}
      </p>
      <button>Add to Cart</button>
    </div>
  `;
});
