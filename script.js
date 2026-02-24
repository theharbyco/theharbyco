// ===== BOOKS DATA =====
const books = [
  {id:1,title:"Atomic Habits",price:299,img:"https://covers.openlibrary.org/b/id/10523338-L.jpg"},
  {id:2,title:"Rich Dad Poor Dad",price:249,img:"https://covers.openlibrary.org/b/id/11153261-L.jpg"},
  {id:3,title:"Deep Work",price:279,img:"https://covers.openlibrary.org/b/id/10958384-L.jpg"},
  {id:4,title:"The Power of Your Subconscious Mind",price:199,img:"https://covers.openlibrary.org/b/id/8231856-L.jpg"},
  {id:5,title:"Think and Grow Rich",price:199,img:"https://covers.openlibrary.org/b/id/7222246-L.jpg"},
  {id:6,title:"Ikigai",price:299,img:"https://covers.openlibrary.org/b/id/10594723-L.jpg"},
  {id:7,title:"The Alchemist",price:249,img:"https://covers.openlibrary.org/b/id/8101354-L.jpg"},
  {id:8,title:"You Can Win",price:199,img:"https://covers.openlibrary.org/b/id/6979861-L.jpg"},
  {id:9,title:"Indian Polity",price:399,img:"https://covers.openlibrary.org/b/id/8225631-L.jpg"},
  {id:10,title:"Indian Economy",price:349,img:"https://covers.openlibrary.org/b/id/8231999-L.jpg"},
  {id:11,title:"History of Modern India",price:329,img:"https://covers.openlibrary.org/b/id/8155422-L.jpg"},
  {id:12,title:"Indian Art and Culture",price:299,img:"https://covers.openlibrary.org/b/id/8284531-L.jpg"},
  {id:13,title:"Geography of India",price:349,img:"https://covers.openlibrary.org/b/id/8234678-L.jpg"},
  {id:14,title:"NCERT Indian History (Class 6-12)",price:499,img:"https://covers.openlibrary.org/b/id/10909341-L.jpg"},
  {id:15,title:"NCERT Geography (Class 6-12)",price:499,img:"https://covers.openlibrary.org/b/id/10909352-L.jpg"},
  {id:16,title:"Lucent General Knowledge",price:299,img:"https://covers.openlibrary.org/b/id/8155411-L.jpg"},
  {id:17,title:"Quantitative Aptitude",price:349,img:"https://covers.openlibrary.org/b/id/8234651-L.jpg"},
  {id:18,title:"General Science for SSC",price:279,img:"https://covers.openlibrary.org/b/id/10932411-L.jpg"},
  {id:19,title:"Premchand Ki Kahaniyan",price:199,img:"https://covers.openlibrary.org/b/id/10945621-L.jpg"},
  {id:20,title:"Godan",price:249,img:"https://covers.openlibrary.org/b/id/8157432-L.jpg"},
  {id:21,title:"Nirmala",price:199,img:"https://covers.openlibrary.org/b/id/10945631-L.jpg"},
  {id:22,title:"Panchatantra Stories",price:149,img:"https://covers.openlibrary.org/b/id/6979823-L.jpg"},
  {id:23,title:"Hitopadesh Stories",price:149,img:"https://covers.openlibrary.org/b/id/6979829-L.jpg"},
  {id:24,title:"Ramayana (Hindi)",price:399,img:"https://covers.openlibrary.org/b/id/8231123-L.jpg"},
  {id:25,title:"Mahabharata (Hindi)",price:449,img:"https://covers.openlibrary.org/b/id/8231135-L.jpg"},
  {id:26,title:"Harry Potter and the Philosopher's Stone",price:349,img:"https://covers.openlibrary.org/b/id/7984916-L.jpg"},
  {id:27,title:"Harry Potter and the Chamber of Secrets",price:349,img:"https://covers.openlibrary.org/b/id/7984917-L.jpg"},
  {id:28,title:"The Hobbit",price:299,img:"https://covers.openlibrary.org/b/id/6979865-L.jpg"},
  {id:29,title:"The Lord of the Rings",price:499,img:"https://covers.openlibrary.org/b/id/8231991-L.jpg"},
  {id:30,title:"The Kite Runner",price:299,img:"https://covers.openlibrary.org/b/id/8232003-L.jpg"},
  {id:31,title:"Wings of Fire",price:249,img:"https://covers.openlibrary.org/b/id/6979869-L.jpg"},
  {id:32,title:"Ignited Minds",price:199,img:"https://covers.openlibrary.org/b/id/6979871-L.jpg"},
  {id:33,"title":"My Experiments with Truth",price:249,img:"https://covers.openlibrary.org/b/id/8231997-L.jpg"},
  {id:34,title:"The Monk Who Sold His Ferrari",price:299,img:"https://covers.openlibrary.org/b/id/8231983-L.jpg"},
  {id:35,title:"India 2020",price:249,img:"https://covers.openlibrary.org/b/id/6979874-L.jpg"},
  {id:36,title:"Verbal & Non-Verbal Reasoning",price:349,img:"https://covers.openlibrary.org/b/id/8234654-L.jpg"},
  {id:37,title:"Fast Track Arithmetic",price:299,img:"https://covers.openlibrary.org/b/id/8234671-L.jpg"},
  {id:38,title:"Objective General English",price:279,img:"https://covers.openlibrary.org/b/id/10932418-L.jpg"},
  {id:39,title:"General Hindi for Competitive Exams",price:249,img:"https://covers.openlibrary.org/b/id/10932421-L.jpg"},
  {id:40,title:"Stories of Swami Vivekananda",price:199,img:"https://covers.openlibrary.org/b/id/6979881-L.jpg"},
  {id:41,title:"Chanakya Neeti",price:149,img:"https://covers.openlibrary.org/b/id/6979884-L.jpg"},
  {id:42,title:"Bhagavad Gita (Hindi)",price:299,img:"https://covers.openlibrary.org/b/id/8231149-L.jpg"},
  {id:43,title:"Life Lessons from Ramayana",price:249,img:"https://covers.openlibrary.org/b/id/10932431-L.jpg"},
  {id:44,title:"Do Epic Shit",price:299,img:"https://covers.openlibrary.org/b/id/10998765-L.jpg"},
  {id:45,title:"The Psychology of Money",price:299,img:"https://covers.openlibrary.org/b/id/10998769-L.jpg"},
  {id:46,title:"Can't Hurt Me",price:349,img:"https://covers.openlibrary.org/b/id/10998771-L.jpg"},
  {id:47,title:"Subtle Art of Not Giving a F*ck",price:299,img:"https://covers.openlibrary.org/b/id/10998773-L.jpg"},
  {id:48,title:"Make Your Bed",price:199,img:"https://covers.openlibrary.org/b/id/10998775-L.jpg"},
  {id:49,title:"Life's Amazing Secrets",price:249,img:"https://covers.openlibrary.org/b/id/10998777-L.jpg"},
  {id:50,title:"Think Like a Monk",price:299,img:"https://covers.openlibrary.org/b/id/10998779-L.jpg"},
  {id:51,title:"The Secret",price:249,img:"https://covers.openlibrary.org/b/id/6979891-L.jpg"},
  {id:52,title:"Mindset",price:299,img:"https://covers.openlibrary.org/b/id/10998781-L.jpg"}
];

// ===== RENDER =====
const grid = document.getElementById("books");
function render(list){
  grid.innerHTML="";
  list.forEach(b=>{
    grid.innerHTML += `
      <div class="card">
        <img loading="lazy" src="${b.img}">
        <div class="info">
          <h4>${b.title}</h4>
          <div class="price">₹${b.price}</div>
          <button onclick="addToCart(${b.id})">Add to Cart</button>
        </div>
      </div>`;
  });
}
render(books);

// SEARCH
document.getElementById("searchInput").addEventListener("input",e=>{
  const q=e.target.value.toLowerCase();
  render(books.filter(b=>b.title.toLowerCase().includes(q)));
});

// ===== CART =====
let cart = JSON.parse(localStorage.getItem("cart")||"[]");
const cartCount = document.getElementById("cartCount");
const cartBox = document.getElementById("cart");
const cartItems = document.getElementById("cartItems");
const totalAmount = document.getElementById("totalAmount");

function save(){ localStorage.setItem("cart",JSON.stringify(cart)); update(); }
function update(){
  cartCount.innerText = cart.reduce((s,i)=>s+i.qty,0);
  cartItems.innerHTML="";
  let total=0;
  cart.forEach(i=>{
    total += i.price*i.qty;
    cartItems.innerHTML += `
      <div class="cart-item">
        <span>${i.title} × ${i.qty}</span>
        <span>₹${i.price*i.qty}</span>
      </div>`;
  });
  totalAmount.innerText = total;
}
function addToCart(id){
  const p=books.find(b=>b.id===id);
  const f=cart.find(i=>i.id===id);
  f?f.qty++:cart.push({...p,qty:1});
  save();
}
function openCart(){ cartBox.classList.add("open"); update(); }
function closeCart(){ cartBox.classList.remove("open"); }

function placeOrder(){ alert("✅ Order placed successfully"); }
function checkoutWhatsApp(){
  let msg="📚 *Order Invoice*\\n";
  let t=0;
  cart.forEach(i=>{ msg+=`• ${i.title} × ${i.qty} = ₹${i.price*i.qty}\\n`; t+=i.price*i.qty; });
  msg+=`\\nTotal: ₹${t}`;
  window.open("https://wa.me/918858504768?text="+encodeURIComponent(msg));
}
function payRazorpay(){ alert("Razorpay integration ready. Add your key to go live."); }

update();
