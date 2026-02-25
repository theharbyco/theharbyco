// Firebase
firebase.initializeApp({
 apiKey:"AIzaSyAe_SMY2YU2xXFP79zGMnbw_zKnzLmvhno",
 authDomain:"theharbyco.firebaseapp.com",
 projectId:"theharbyco"
});
const auth=firebase.auth();

// BOOK DATA (short example – tu 52 wala paste kar sakta)
const books=[
 {id:1,title:"Atomic Habits",price:299,img:"https://covers.openlibrary.org/b/id/10523338-L.jpg"},
 {id:2,title:"Rich Dad Poor Dad",price:249,img:"https://covers.openlibrary.org/b/id/11153261-L.jpg"},
 {id:3,title:"The Alchemist",price:249,img:"https://covers.openlibrary.org/b/id/8101354-L.jpg"}
];

let cart={};

// Render Books
function renderBooks(list=books){
 booksBox.innerHTML=list.map(b=>`
 <div class="book">
  <img loading="lazy" src="${b.img}">
  <b>${b.title}</b>
  <p>₹${b.price}</p>
  <button onclick="addCart(${b.id})">Add</button>
 </div>`).join("");
}
const booksBox=document.getElementById("books");
renderBooks();

// Search
function searchBooks(q){
 renderBooks(books.filter(b=>b.title.toLowerCase().includes(q.toLowerCase())));
}

// Cart
function addCart(id){cart[id]=(cart[id]||0)+1;updateCart();}
function updateCart(){
 let html="",total=0,count=0;
 for(let id in cart){
  let b=books.find(x=>x.id==id);
  html+=`${b.title} × ${cart[id]}<br>`;
  total+=b.price*cart[id];
  count+=cart[id];
 }
 cartItems.innerHTML=html;
 cartTotal.innerText="₹"+total;
 cartCount.innerText=count;
}
function toggleCart(){
 cartBox.style.display=cartBox.style.display=="block"?"none":"block";
}

// Login
function openLogin(){loginModal.style.display="flex"}
function closeLogin(){loginModal.style.display="none"}
function emailLogin(){
 auth.signInWithEmailAndPassword(email.value,password.value)
 .then(closeLogin).catch(e=>alert(e.message));
}
function googleLogin(){
 auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
 .then(closeLogin);
}

// Checkout
function checkout(){
 if(!auth.currentUser){openLogin();return;}
 placeOrder();
}

// Orders
function placeOrder(){
 let order={
  id:"ORD"+Date.now(),
  user:auth.currentUser.email,
  items:cart,
  date:new Date().toLocaleString()
 };
 let orders=JSON.parse(localStorage.getItem("orders")||"[]");
 orders.push(order);
 localStorage.setItem("orders",JSON.stringify(orders));
 cart={};updateCart();
 alert("Order placed!");
}

function showOrders(){
 if(!auth.currentUser){openLogin();return;}
 ordersPage.style.display="block";
 booksBox.style.display="none";
 let orders=JSON.parse(localStorage.getItem("orders")||"[]")
 .filter(o=>o.user==auth.currentUser.email);
 ordersList.innerHTML=orders.map(o=>`
 <div class="order-card">
  <b>${o.id}</b><br>${o.date}<br>
  <button onclick='viewInvoice(${JSON.stringify(o)})'>Invoice</button>
 </div>`).join("");
}

// Invoice
function viewInvoice(o){
 invoiceModal.style.display="flex";
 let html=`<b>${o.id}</b><hr>`;
 let t=0;
 for(let id in o.items){
  let b=books.find(x=>x.id==id);
  html+=`${b.title} × ${o.items[id]}<br>`;
  t+=b.price*o.items[id];
 }
 html+=`<hr>Total ₹${t}`;
 invoiceData.innerHTML=html;
}
