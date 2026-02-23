<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAe_SM2YU2xXFP79zGMbw_zKnzLnvhno",
  authDomain: "theharbyco.firebaseapp.com",
  projectId: "theharbyco",
  storageBucket: "theharbyco.firebasestorage.app",
  messagingSenderId: "241710496520",
  appId: "1:241710496520:web:8d8caaf54e30731e9d8abd"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

/* LOGIN */
window.loginGoogle = () => {
  signInWithPopup(auth, provider);
};

/* LOGOUT */
window.logoutUser = () => {
  signOut(auth);
};

/* USER STATE */
onAuthStateChanged(auth, user => {
  if (user) {
    document.getElementById("loginBtn").style.display = "none";
    document.getElementById("logoutBtn").style.display = "inline";
    document.getElementById("userName").innerText = user.displayName;
  }
});
</script>
