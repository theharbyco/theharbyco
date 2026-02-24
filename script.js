/* ================= FIREBASE INIT ================= */
firebase.initializeApp({
  apiKey: "AIzaSyAe_SMY2YU2xXFP79zGMnbw_zKnzLmvhno",
  authDomain: "theharbyco.firebaseapp.com",
  projectId: "theharbyco",
  storageBucket: "theharbyco.firebasestorage.app",
  messagingSenderId: "241710496520",
  appId: "1:241710496520:web:8d8caaf54e30731e9d8abd"
});

const auth = firebase.auth();

/* ================= BOOK DATA ================= */
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

/* ================= RENDER BOOKS ================= */
const booksBox = document.getElementById("books");
function renderBooks(list = books){
  booksBox.innerHTML = list.map(b=>`
    <div class="book">
      <img loading="lazy" src="${b.img}">
      <h4>${b.title}</h4>
      <p>₹${b.price}</p>
      <button onclick="addCart(${b.id})">Add to Cart</button>
    </div>
  `).join("");
}
renderBooks();

/* ================= SEARCH ================= */
function searchBooks(q){
  renderBooks(
    books.filter(b=>b.title.toLowerCase().includes(q.toLowerCase()))
  );
}

/* ================= CART ================= */
let cart = {};

function addCart(id){
  cart[id] = (cart[id] || 0) + 1;
  updateCart();
}

function updateCart(){
  let html="", total=0, count=0;
  for(let id in cart){
    const b = books.find(x=>x.id==id);
    html += `${b.title} × ${cart[id]}<br>`;
    total += b.price * cart[id];
    count += cart[id];
  }
  cartItems.innerHTML = html || "Cart is empty";
  cartTotal.innerText = "₹" + total;
  cartCount.innerText = count;
}

function toggleCart(){
  cartBox.style.display =
    cartBox.style.display === "block" ? "none" : "block";
}

/* ================= LOGIN MODAL ================= */
function openLogin(){ loginModal.style.display="flex"; }
function closeLogin(){ loginModal.style.display="none"; }

/* ================= EMAIL LOGIN ================= */
function emailLogin(){
  auth.signInWithEmailAndPassword(
    email.value.trim(),
    password.value.trim()
  )
  .then(()=>{
    alert("✅ Login Successful");
    closeLogin();
  })
  .catch(err=>alert(err.message));
}

function emailSignup(){
  auth.createUserWithEmailAndPassword(
    email.value.trim(),
    password.value.trim()
  )
  .then(()=>{
    alert("✅ Account Created");
    closeLogin();
  })
  .catch(err=>alert(err.message));
}

/* ================= GOOGLE LOGIN ================= */
function googleLogin(){
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
  .then(()=>{
    alert("✅ Google Login Success");
    closeLogin();
  })
  .catch(err=>alert(err.message));
}

/* ================= AUTH STATE ================= */
auth.onAuthStateChanged(user=>{
  if(user){
    userName.innerText = "Hello " + (user.displayName || user.email);
    loginBtn.style.display = "none";
    logoutBtn.style.display = "inline";
  }
});

function logoutUser(){
  auth.signOut();
  location.reload();
}

/* ================= DARK MODE ================= */
function toggleDark(){
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
}
if(localStorage.getItem("theme")==="dark"){
  document.body.classList.add("dark");
}

/* ================= CHECKOUT ================= */
function checkout(){
  if(!auth.currentUser){
    openLogin();
    return;
  }
  alert("🔐 Secure payment coming next");
}
