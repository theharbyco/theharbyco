// Firebase config
firebase.initializeApp({
  apiKey: "AIzaSyAe_SMY2YU2xXFP79zGMnbw_zKnzLmvhno",
  authDomain: "theharbyco.firebaseapp.com",
  projectId: "theharbyco",
  storageBucket: "theharbyco.firebasestorage.app",
  messagingSenderId: "241710496520",
  appId: "1:241710496520:web:8d8caaf54e30731e9d8abd"
});

const auth = firebase.auth();

// BOOK DATA (shortened example – tu apne 52 wala paste kar sakta h)
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

let cart={};

// Render Books
function renderBooks(list=books){
 document.getElementById("books").innerHTML =
 list.map(b=>`
  <div class="book">
    <img loading="lazy" src="${b.img}">
    <b>${b.title}</b>
    <p>₹${b.price}</p>
    <button onclick="addCart(${b.id})">Add to Cart</button>
  </div>
 `).join("");
}
renderBooks();

// Search
function searchBooks(q){
 renderBooks(books.filter(b=>b.title.toLowerCase().includes(q.toLowerCase())));
}

// Cart
function addCart(id){
 cart[id]=(cart[id]||0)+1;
 updateCart();
}

function updateCart(){
 let items="",total=0,count=0;
 for(let id in cart){
  let b=books.find(x=>x.id==id);
  items+=`${b.title} × ${cart[id]}<br>`;
  total+=b.price*cart[id];
  count+=cart[id];
 }
 cartItems.innerHTML=items;
 cartTotal.innerText="₹"+total;
 cartCount.innerText=count;
}

function toggleCart(){
 cart.style.display=cart.style.display=="block"?"none":"block";
}

// Login modal
function openLogin(){loginModal.style.display="flex"}
function closeLogin(){loginModal.style.display="none"}

// Auth
function emailLogin(){
 auth.signInWithEmailAndPassword(email.value,password.value)
 .then(()=>alert("Logged in"))
 .catch(e=>alert(e.message));
}

function googleLogin(){
 let p=new firebase.auth.GoogleAuthProvider();
 auth.signInWithPopup(p);
}

// OTP
window.onload=()=>{
 window.recaptcha=new firebase.auth.RecaptchaVerifier("recaptcha",{size:"invisible"});
};

function sendOTP(){
 auth.signInWithPhoneNumber(phone.value,recaptcha)
 .then(r=>window.confirmation=r);
}

function verifyOTP(){
 confirmation.confirm(otp.value).then(()=>alert("Logged in"));
}

// Dark Mode
function toggleDark(){
 document.body.classList.toggle("dark");
 localStorage.setItem("theme",document.body.classList.contains("dark")?"dark":"light");
}
if(localStorage.getItem("theme")=="dark") document.body.classList.add("dark");

// Checkout
function checkout(){
 alert("Payment integration next 🔐");
}
