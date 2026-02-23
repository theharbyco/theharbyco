// 🔥 FIREBASE CONFIG (PASTE YOUR OWN)
firebase.initializeApp({
apiKey: "YOUR_API_KEY",
authDomain: "YOUR_PROJECT.firebaseapp.com",
projectId: "YOUR_PROJECT"
});

const auth = firebase.auth();
const db = firebase.firestore();

// 🔐 LOGIN
function googleLogin(){
const provider = new firebase.auth.GoogleAuthProvider();
auth.signInWithPopup(provider);
}
function logout(){ auth.signOut(); }

auth.onAuthStateChanged(user=>{
if(user){
document.getElementById("userName").innerText = "Hello, " + user.displayName;
saveUser(user);
}else{
document.getElementById("userName").innerText = "";
}
});

function saveUser(user){
db.collection("users").doc(user.uid).set({
name:user.displayName,
email:user.email
},{merge:true});
}

// 📚 BOOK DATA
const books = [
 {name:"Atomic Habits",cat:"Self-Help",mrp:699,price:399,img:"atomic-habits.jpg"},
 {name:"Rich Dad Poor Dad",cat:"Finance",mrp:599,price:349,img:"rich-dad-poor-dad.jpg"},
 {name:"Gunahon Ka Devta",cat:"Romance",mrp:299,price:249,img:"gunahon-ka-devta.jpg"},
 {name:"Raag Darbari",cat:"Satire",mrp:399,price:349,img:"raag-darbari.jpg"},
 {name:"October Junction",cat:"Fiction",mrp:350,price:300,img:"october-junction.jpg"},
 {name:"Chaurasi (84)",cat:"Historical",mrp:299,price:249,img:"chaurasi-84.jpg"},
 {name:"Delhi Darbar",cat:"Stories",mrp:350,price:300,img:"delhi-darbar.jpg"},
 {name:"Rooh",cat:"Literary",mrp:399,price:349,img:"rooh.jpg"},
 {name:"Shirt Ka Teesra Button",cat:"Essays",mrp:299,price:249,img:"shirt-ka-teesra-button.jpg"},
 {name:"Deewar Mein Ek Khidki Rahti Thi",cat:"Fiction",mrp:250,price:200,img:"deewar-mein-ek-khidki.jpg"},
 {name:"Idgah",cat:"Classic",mrp:150,price:129,img:"idgah.jpg"},
 {name:"Godaan",cat:"Classic",mrp:300,price:250,img:"godaan.jpg"},
 {name:"Wings of Fire",cat:"Motivation",mrp:499,price:449,img:"wings-of-fire.jpg"},
 {name:"The Alchemist",cat:"Fiction",mrp:399,price:349,img:"the-alchemist.jpg"},
 {name:"Five Point Someone",cat:"Campus",mrp:299,price:249,img:"five-point-someone.jpg"},
 {name:"The 3 Mistakes of My Life",cat:"Fiction",mrp:299,price:249,img:"three-mistakes-of-my-life.jpg"},
 {name:"Think Like a Monk",cat:"Self-Help",mrp:699,price:649,img:"think-like-a-monk.jpg"},
 {name:"Ikigai",cat:"Self-Help",mrp:499,price:449,img:"ikigai.jpg"},
 {name:"The Psychology of Money",cat:"Finance",mrp:499,price:449,img:"psychology-of-money.jpg"},
 {name:"Do Epic Shit",cat:"Motivation",mrp:499,price:449,img:"do-epic-shit.jpg"},
 {name:"You Can Win",cat:"Motivation",mrp:350,price:300,img:"you-can-win.jpg"},
 {name:"The Monk Who Sold His Ferrari",cat:"Motivation",mrp:399,price:349,img:"monk-who-sold-his-ferrari.jpg"},
 {name:"BlackBook of English Vocabulary",cat:"Education",mrp:449,price:399,img:"blackbook-vocab.jpg"},
 {name:"NCERT Class 10 English",cat:"Academic",mrp:200,price:150,img:"ncert-10-english.jpg"},
 {name:"SSC General Knowledge",cat:"Exam Prep",mrp:450,price:400,img:"ssc-gk.jpg"}
];

// 📦 CART
let cart=[];

function loadBooks(){
const box=document.getElementById("books");
books.forEach((b,i)=>{
box.innerHTML+=`
<div class="card">
<img src="https://covers.openlibrary.org/b/title/${b.name}-L.jpg">
<h4>${b.name}</h4>
<p>₹${b.price}</p>
<button onclick="addToCart(${i})">Add</button>
</div>`;
});
}
loadBooks();

function addToCart(i){
cart.push(books[i]);
document.getElementById("cartCount").innerText=cart.length;
}

function openCart(){
document.getElementById("cartBox").classList.add("show");
renderCart();
}
function closeCart(){
document.getElementById("cartBox").classList.remove("show");
}

function renderCart(){
let box=document.getElementById("cartItems");
box.innerHTML="";
cart.forEach(c=> box.innerHTML+=`<p>${c.name} – ₹${c.price}</p>`);
}

function checkout(){
const user=auth.currentUser;
if(!user){ alert("Login required"); return; }

let total=cart.reduce((s,i)=>s+i.price,0);
saveOrder(user.uid,total);

let msg="Order Details:%0A";
cart.forEach(i=> msg+=`${i.name} - ₹${i.price}%0A`);
msg+=`Total: ₹${total}`;

window.open(`https://wa.me/+918858504768?text=${msg}`);
cart=[];
closeCart();
}

// 🧾 SAVE ORDER
function saveOrder(uid,total){
db.collection("orders").add({
userId:uid,
items:cart,
total:total,
date:firebase.firestore.FieldValue.serverTimestamp()
});
}
