// BOOK DATA (52)
const books = [
  {id:1,title:"Atomic Habits",price:299,cat:"Self Help"},
  {id:2,title:"Rich Dad Poor Dad",price:249,cat:"Self Help"},
  {id:3,title:"Deep Work",price:279,cat:"Self Help"},
  {id:4,title:"The Power of Your Subconscious Mind",price:199,cat:"Self Help"},
  {id:5,title:"Think and Grow Rich",price:199,cat:"Self Help"},
  {id:6,title:"Ikigai",price:299,cat:"Self Help"},
  {id:7,title:"The Alchemist",price:249,cat:"Novel"},
  {id:8,title:"You Can Win",price:199,cat:"Self Help"},
  {id:9,title:"Indian Polity",price:399,cat:"Exam"},
  {id:10,title:"Indian Economy",price:349,cat:"Exam"},
  {id:11,title:"History of Modern India",price:329,cat:"Exam"},
  {id:12,title:"Indian Art and Culture",price:299,cat:"Exam"},
  {id:13,title:"Geography of India",price:349,cat:"Exam"},
  {id:14,title:"NCERT Indian History",price:499,cat:"Exam"},
  {id:15,title:"NCERT Geography",price:499,cat:"Exam"},
  {id:16,title:"Lucent General Knowledge",price:299,cat:"Exam"},
  {id:17,title:"Quantitative Aptitude",price:349,cat:"Exam"},
  {id:18,title:"General Science for SSC",price:279,cat:"Exam"},
  {id:19,title:"Premchand Ki Kahaniyan",price:199,cat:"Hindi"},
  {id:20,title:"Godan",price:249,cat:"Hindi"},
  {id:21,title:"Nirmala",price:199,cat:"Hindi"},
  {id:22,title:"Panchatantra Stories",price:149,cat:"Hindi"},
  {id:23,title:"Hitopadesh Stories",price:149,cat:"Hindi"},
  {id:24,title:"Ramayana",price:399,cat:"Hindi"},
  {id:25,title:"Mahabharata",price:449,cat:"Hindi"},
  {id:26,title:"Harry Potter 1",price:349,cat:"Novel"},
  {id:27,title:"Harry Potter 2",price:349,cat:"Novel"},
  {id:28,title:"The Hobbit",price:299,cat:"Novel"},
  {id:29,title:"The Lord of the Rings",price:499,cat:"Novel"},
  {id:30,title:"The Kite Runner",price:299,cat:"Novel"},
  {id:31,title:"Wings of Fire",price:249,cat:"Biography"},
  {id:32,title:"Ignited Minds",price:199,cat:"Biography"},
  {id:33,title:"My Experiments with Truth",price:249,cat:"Biography"},
  {id:34,title:"The Monk Who Sold His Ferrari",price:299,cat:"Self Help"},
  {id:35,title:"India 2020",price:249,cat:"Biography"},
  {id:36,title:"Reasoning",price:349,cat:"Exam"},
  {id:37,title:"Fast Track Arithmetic",price:299,cat:"Exam"},
  {id:38,title:"Objective General English",price:279,cat:"Exam"},
  {id:39,title:"General Hindi",price:249,cat:"Exam"},
  {id:40,title:"Swami Vivekananda Stories",price:199,cat:"Spiritual"},
  {id:41,title:"Chanakya Neeti",price:149,cat:"Spiritual"},
  {id:42,title:"Bhagavad Gita",price:299,cat:"Spiritual"},
  {id:43,title:"Life Lessons from Ramayana",price:249,cat:"Spiritual"},
  {id:44,title:"Do Epic Shit",price:299,cat:"Self Help"},
  {id:45,title:"Psychology of Money",price:299,cat:"Self Help"},
  {id:46,title:"Can't Hurt Me",price:349,cat:"Self Help"},
  {id:47,title:"Subtle Art",price:299,cat:"Self Help"},
  {id:48,title:"Make Your Bed",price:199,cat:"Self Help"},
  {id:49,title:"Life's Amazing Secrets",price:249,cat:"Self Help"},
  {id:50,title:"Think Like a Monk",price:299,cat:"Self Help"},
  {id:51,title:"The Secret",price:249,cat:"Self Help"},
  {id:52,title:"Mindset",price:299,cat:"Self Help"}
];

let cart = [];

// RENDER BOOKS
function renderBooks(list){
  document.getElementById("books").innerHTML =
    list.map(b=>`
      <div class="book">
        <img src="${b.img}">
        <h4>${b.title}</h4>
        <b>₹${b.price}</b><br>
        <button onclick="addToCart(${b.id})">Add to Cart</button>
      </div>
    `).join("");
}

// SEARCH
function searchBooks(q){
  q=q.toLowerCase();
  renderBooks(books.filter(b=>b.title.toLowerCase().includes(q)));
}

// CART
function addToCart(id){
  let item = cart.find(i=>i.id===id);
  if(item) item.qty++;
  else{
    let b = books.find(x=>x.id===id);
    cart.push({...b,qty:1});
  }
  updateCart();
}

function changeQty(id,delta){
  let item = cart.find(i=>i.id===id);
  item.qty+=delta;
  if(item.qty<=0) cart = cart.filter(i=>i.id!==id);
  updateCart();
}

function updateCart(){
  let total=0,count=0;
  document.getElementById("cartItems").innerHTML =
    cart.map(i=>{
      total+=i.price*i.qty;
      count+=i.qty;
      return `
        <div class="cart-item">
          ${i.title}
          <div class="qty">
            <button onclick="changeQty(${i.id},-1)">-</button>
            ${i.qty}
            <button onclick="changeQty(${i.id},1)">+</button>
          </div>
        </div>
      `;
    }).join("");
  document.getElementById("cartTotal").innerText=total;
  document.getElementById("cartCount").innerText=count;
}

renderBooks(books);
