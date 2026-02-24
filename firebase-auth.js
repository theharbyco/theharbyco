// 🔐 Replace with YOUR Firebase keys
firebase.initializeApp({
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com"
});
const auth = firebase.auth();

// MODAL
function openLogin(){ document.getElementById("loginModal").classList.add("show"); }
function closeLogin(){ document.getElementById("loginModal").classList.remove("show"); }

// EMAIL
function emailSignup(){
  auth.createUserWithEmailAndPassword(
    email.value,password.value
  ).then(()=>alert("Account created"))
   .catch(e=>alert(e.message));
}
function emailLogin(){
  auth.signInWithEmailAndPassword(
    email.value,password.value
  ).then(()=>closeLogin())
   .catch(e=>alert(e.message));
}

// GOOGLE
function googleLogin(){
  const p=new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(p).then(()=>closeLogin());
}

// STATE
auth.onAuthStateChanged(u=>{
  if(u){ document.getElementById("loginBtn").innerText="Logout";
    document.getElementById("loginBtn").onclick=()=>auth.signOut();
  }
});
