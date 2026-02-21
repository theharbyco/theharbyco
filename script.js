let cart = JSON.parse(localStorage.getItem("cart")) || [];

const booksData = [
  {
    name:"Gunahon Ka Devta",
    author:"Dharmvir Bharati",
    category:"Romance",
    language:"Hindi",
    mrp:299,
    price:249,
    tag:"Bestseller"
  },
  {
    name:"Raag Darbari",
    author:"Shrilal Shukla",
    category:"Satire",
    language:"Hindi",
    mrp:399,
    price:349,
    tag:"Classic"
  },
  {
    name:"October Junction",
    author:"Divya Prakash Dubey",
    category:"Fiction",
    language:"English",
    mrp:350,
    price:300,
    tag:"New"
  }
];

let activeCategory="All";
let activeLanguage="All";
let sortType="";

function addToCart(name,price){
  cart.push({name,price});
  localStorage.setItem("cart",JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount(){
  const c=document.getElementById("cart-count");
  if(c) c.innerText=cart.length;
}

function setSort(type){
  sortType=type;
  renderBooks();
}

function renderBooks(){
  const search=document.getElementById("searchBox").value.toLowerCase();
  let data=[...booksData];

  data=data.filter(b =>
    (activeCategory==="All" || b.category===activeCategory) &&
    (activeLanguage==="All" || b.language===activeLanguage) &&
    (b.name.toLowerCase().includes(search) ||
     b.author.toLowerCase().includes(search))
  );

  if(sortType==="low") data.sort((a,b)=>a.price-b.price);
  if(sortType==="high") data.sort((a,b)=>b.price-a.price);

  const box=document.getElementById("booksContainer");
  box.innerHTML="";

  data.forEach(b=>{
    const off=Math.round(((b.mrp-b.price)/b.mrp)*100);

    box.innerHTML+=`
    <div class="book-card">
      <span class="discount">${off}% OFF</span>
      <span class="tag">${b.tag}</span>
      <h3>${b.name}</h3>
      <p>${b.author}</p>
      <p>${b.language} | ${b.category}</p>
      <span class="mrp">₹${b.mrp}</span>
      <span class="sell">₹${b.price}</span>
      <button onclick="addToCart('${b.name}',${b.price})">
        Add to Cart
      </button>
    </div>`;
  });
}

function createFilters(){
  const catBox=document.getElementById("bookFilters");
  const langBox=document.getElementById("languageFilters");

  ["All",...new Set(booksData.map(b=>b.category))]
    .forEach(c=>{
      catBox.innerHTML+=
      `<button onclick="activeCategory='${c}';renderBooks()">${c}</button>`;
    });

  ["All",...new Set(booksData.map(b=>b.language))]
    .forEach(l=>{
      langBox.innerHTML+=
      `<button onclick="activeLanguage='${l}';renderBooks()">${l}</button>`;
    });
}

updateCartCount();
createFilters();
renderBooks();
