// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAe_SMY2YU2xXFP79zGMnbw_zKnzLmvhno",
  authDomain: "theharbyco.firebaseapp.com",
  projectId: "theharbyco",
};

// Init Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

/* ---------- GOOGLE LOGIN ---------- */
function loginGoogle() {
  auth.signInWithPopup(provider)
    .then(res => {
      document.getElementById("userName").innerText =
        "Welcome " + res.user.displayName;
    })
    .catch(err => alert(err.message));
}

/* ---------- PHONE OTP LOGIN ---------- */
window.onload = () => {
  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
    "recaptcha-container",
    { size: "normal" }
  );
};

function sendOTP() {
  const phone = document.getElementById("phone").value;
  auth.signInWithPhoneNumber(phone, window.recaptchaVerifier)
    .then(result => {
      window.confirmationResult = result;
      alert("OTP Sent");
    })
    .catch(err => alert(err.message));
}

function verifyOTP() {
  const otp = document.getElementById("otp").value;
  window.confirmationResult.confirm(otp)
    .then(res => {
      document.getElementById("userName").innerText =
        "Welcome " + res.user.phoneNumber;
    })
    .catch(() => alert("Wrong OTP"));
}

/* ---------- LOGOUT ---------- */
function logoutUser() {
  auth.signOut().then(() => location.reload());
}
