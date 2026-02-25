/* 🔥 FIREBASE INIT */
firebase.initializeApp({
  apiKey: "AIzaSyAe_SMY2YU2xXFP79zGMnbw_zKnzLmvhno",
  authDomain: "theharbyco.firebaseapp.com",
  projectId: "theharbyco"
});
const auth = firebase.auth();

/* 📚 BOOK DATA (LOCAL REAL COVERS) */
const books = [
 {id:1,title:"Atomic Habits",price:299,img:"images/atomic-habits.jpg"},
 {id:2,title:"Rich Dad Poor Dad",price:249,img:"images/rich-dad-poor-dad.jpg"},
 {id:3,title:"Deep Work",price:279,img:"images/deep-work.jpg"},
 {id:4,title:"Ikigai",price:299,img:"images/ikigai.jpg"},
 {id:5,title:"The Alchemist",price:249,img:"images/the-alchemist.jpg"}
 // 👉 baaki books yahin add karte ja
];

const box=document.getElementById("books");

/* RENDER BOOKS */
function render(list=books){
 box.innerHTML=list.map(b=>`
  <div class="book">
    <img loading="lazy" src="${b.img || 'images/placeholder.jpg'}">
    <h4>${b.title}</h4>
    <p>₹${b.price}</p>
    <button onclick="addCart(${b.id})">Add to Cart</button>
  </div>
 `).join("");
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
     <button onclick="cart[id]>1?cart[id]--:delete cart[id];updateCart()">-</button>
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

function toggleCart(){
 cartPanel.style.display =
 cartPanel.style.display=="block"?"none":"block";
}

/* LOGIN MODAL */
function openLogin(){loginModal.style.display="flex"}
function closeLogin(){loginModal.style.display="none"}

function emailLogin(){
 auth.signInWithEmailAndPassword(email.value,password.value)
 .then(closeLogin)
 .catch(e=>alert(e.message));
}

function googleLogin(){
 const provider=new firebase.auth.GoogleAuthProvider();
 auth.signInWithPopup(provider)
 .then(closeLogin)
 .catch(e=>alert(e.message));
}

function logoutUser(){
 auth.signOut();
}

/* AUTH STATE */
auth.onAuthStateChanged(user=>{
 if(user){
  loginBtn.style.display="none";
  logoutBtn.style.display="inline-block";
  userName.innerText="Hi, "+(user.displayName||user.email.split("@")[0]);
 }else{
  loginBtn.style.display="inline-block";
  logoutBtn.style.display="none";
  userName.innerText="";
 }
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
