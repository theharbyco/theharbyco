const books = [
  { name:"Atomic Habits", cat:"Self-Help", mrp:699, price:649, tag:"Bestseller" },
  { name:"Rich Dad Poor Dad", cat:"Finance", mrp:499, price:449, tag:"New" },
  { name:"Gunahon Ka Devta", cat:"Romance", mrp:299, price:249 },
  { name:"Raag Darbari", cat:"Satire", mrp:399, price:349 },
  { name:"October Junction", cat:"Fiction", mrp:350, price:300 },
  { name:"Chaurasi (84)", cat:"Historical", mrp:299, price:249 },
  { name:"Delhi Darbar", cat:"Stories", mrp:350, price:300 },
  { name:"Rooh", cat:"Literary", mrp:399, price:349 },
  { name:"Godaan", cat:"Classic", mrp:300, price:250 },
  { name:"Wings of Fire", cat:"Motivation", mrp:499, price:449 }
];

let cart = 0;

const booksDiv = document.getElementById("books");
const catSelect = document.getElementById("category");

[...new Set(books.map(b => b.cat))].forEach(c => {
  let o = document.createElement("option");
  o.value = c;
  o.textContent = c;
  catSelect.appendChild(o);
});

function render(list) {
  booksDiv.innerHTML = "";
  list.forEach((b,i)=>{
    let off = Math.round(((b.mrp - b.price)/b.mrp)*100);
    booksDiv.innerHTML += `
      <div class="card">
        ${b.tag ? `<div class="tag">${b.tag}</div>` : ""}
        <img src="https://picsum.photos/300/400?random=${i}">
        <h4>${b.name}</h4>
        <p>${b.cat}</p>
        <p class="price"><del>₹${b.mrp}</del> ₹${b.price}</p>
        <p class="off">${off}% OFF</p>
        <button onclick="addCart()">Add to Cart</button>
      </div>
    `;
  });
}

function addCart(){
  cart++;
  document.getElementById("cartCount").innerText = cart;
}

document.getElementById("search").oninput = e => {
  render(books.filter(b=>b.name.toLowerCase().includes(e.target.value.toLowerCase())));
};

catSelect.onchange = e => {
  render(e.target.value==="All" ? books : books.filter(b=>b.cat===e.target.value));
};

document.getElementById("sort").onchange = e => {
  let s = [...books];
  if(e.target.value==="low") s.sort((a,b)=>a.price-b.price);
  if(e.target.value==="high") s.sort((a,b)=>b.price-a.price);
  render(s);
};

render(books);
