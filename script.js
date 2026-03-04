import { auth, db } from "./firebase-config.js";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import {
  doc,
  setDoc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const provider = new GoogleAuthProvider();

// ---------------- LOGIN ----------------
function googleLogin() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithRedirect(provider);
}

// Redirect ke baad user check
firebase.auth().getRedirectResult()
  .then((result) => {
    if (result.user) {
      window.location.href = "dashboard.html";
    }
  })
  .catch((error) => {
    console.error(error);
  });
// ---------------- LOGOUT ----------------
window.logout = async function () {
  await signOut(auth);
  window.location.href = "index.html";
};

// ---------------- SUBSCRIBE ----------------
window.subscribeUser = async function (plan) {

  const user = auth.currentUser;
  if (!user) return alert("Login First");

  let days = plan === "monthly" ? 30 : 365;

  let start = new Date();
  let expiry = new Date();
  expiry.setDate(start.getDate() + days);

  await setDoc(doc(db, "subscriptions", user.uid), {
    plan,
    startDate: start,
    expiryDate: expiry
  });

  alert("Subscription Activated!");
  window.location.href = "dashboard.html";
};

// ---------------- CHECK SUBSCRIPTION ----------------
export async function checkSubscription() {

  const user = auth.currentUser;
  if (!user) return false;

  const snap = await getDoc(doc(db, "subscriptions", user.uid));
  if (!snap.exists()) return false;

  const expiry = snap.data().expiryDate.toDate();
  return new Date() < expiry;
}

// ---------------- SAVE PROGRESS ----------------
window.saveProgress = async function(bookId, page){

  const user = auth.currentUser;
  await setDoc(doc(db,"readingProgress",user.uid+"_"+bookId),{
    page:page,
    updatedAt:new Date()
  });
};
