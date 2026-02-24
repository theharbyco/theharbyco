firebase.initializeApp({
 apiKey:"AIzaSyAe_SMY2YU2xXFP79zGMnbw_zKnzLmvhno",
 authDomain:"theharbyco.firebaseapp.com"
});

const auth=firebase.auth();
let confirmation;

function openLogin(){loginModal.style.display="block";}
function closeLogin(){loginModal.style.display="none";}

function loginGoogle(){
 auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
}

function emailSignup(){
 auth.createUserWithEmailAndPassword(email.value,password.value)
 .then(()=>alert("Account Created"));
}

function emailLogin(){
 auth.signInWithEmailAndPassword(email.value,password.value);
}

window.onload=()=>{
 window.recaptcha=new firebase.auth.RecaptchaVerifier("recaptcha");
};

function sendOTP(){
 confirmation=auth.signInWithPhoneNumber(phone.value,window.recaptcha);
}

function verifyOTP(){
 confirmation.confirm(otp.value);
}

auth.onAuthStateChanged(u=>{
 if(u){
  userName.innerText="Hello "+(u.displayName||u.phoneNumber||u.email);
  loginBtn.style.display="none";
  logoutBtn.style.display="inline";
  closeLogin();
 }
});

function logoutUser(){auth.signOut();location.reload();}
