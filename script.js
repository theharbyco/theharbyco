/* 🔥 FIREBASE INIT */
firebase.initializeApp({
  apiKey: "AIzaSyAe_SMY2YU2xXFP79zGMnbw_zKnzLmvhno",
  authDomain: "theharbyco.firebaseapp.com",
  projectId: "theharbyco"
});
const auth = firebase.auth();

/* 📚 BOOKS (LOCAL REAL COVERS) */
const books=[
{id:1,title:"Atomic Habits",price:299,img:"images/atomic.jpg"},
{id:2,title:"Rich Dad Poor Dad",price:249,img:"images/richdad.jpg"},
{id:3,title:"Deep Work",price:279,img:"images/deepwork.jpg"},
{id:4,title:"Ikigai",price:299,img:"images/ikigai.jpg"},
{id:5,title:"The Alchemist",price:249,img:"images/alchemist.jpg"},
{id:6,title:"Wings of Fire",price:249,img:"images/wings.jpg"}
];

/* RENDER */
const box=document.getElementById("books");
function render(list=books){
 box.innerHTML=list.map(b=>`
  <div class="book">
    <img loading="lazy" src="${b.img}">
    <h4>${b.title}</h4>
    <p>₹${b.price}</p>
    <button onclick="addCart(${b.id})">Add</button>
  </div>`).join("");
}
render();

/* SEARCH */
function searchBooks(q){
 render(books.filter(b=>b.title.toLowerCase().includes(q.toLowerCase())));
}

/* CART */
let cart={};
function addCart(id){
 cart[id]=(cart[id]||0)+1;
 updateCart();
}
function updateCart(){
 let html="",total=0,count=0;
 for(let id in cart){
  let b=books.find(x=>x.id==id);
  html+=`
  <div class="cartItem">
   ${b.title}
   <div>
    <button onclick="cart[id]--;updateCart()">-</button>
    ${cart[id]}
    <button onclick="cart[id]++;updateCart()">+</button>
   </div>
  </div>`;
  total+=b.price*cart[id];
  count+=cart[id];
 }
 cartItems.innerHTML=html;
 cartTotal.innerText="₹"+total;
 cartCount.innerText=count;
}

/* CART TOGGLE */
function toggleCart(){
 cartPanel.style.display=cartPanel.style.display=="block"?"none":"block";
}

/* LOGIN */
function openLogin(){loginModal.style.display="flex"}
function closeLogin(){loginModal.style.display="none"}

function emailLogin(){
 auth.signInWithEmailAndPassword(email.value,password.value)
 .then(()=>closeLogin())
 .catch(e=>alert(e.message));
}
function googleLogin(){
 const p=new firebase.auth.GoogleAuthProvider();
 auth.signInWithPopup(p).then(()=>closeLogin());
}

auth.onAuthStateChanged(u=>{
 if(u) userName.innerText="Hi, "+(u.displayName||u.email);
});

/* CHECKOUT */
function checkout(){
 if(!auth.currentUser){openLogin();return;}
 let msg="📚 *The Harby Co Order*%0A%0A";
 let total=0;
 for(let id in cart){
  let b=books.find(x=>x.id==id);
  msg+=`${b.title} × ${cart[id]} = ₹${b.price*cart[id]}%0A`;
  total+=b.price*cart[id];
 }
 msg+=`%0A💰 Total: ₹${total}`;
 window.open("https://wa.me/918858504768?text="+msg);
}
