// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBg5qsBo6YoU8sSALBM8KuGAXa7Jlfyd48",
  authDomain: "theharbyco-9d588.firebaseapp.com",
  projectId: "theharbyco-9d588",
  storageBucket: "theharbyco-9d588.firebasestorage.app",
  messagingSenderId: "972519563569",
  appId: "1:972519563569:web:e706240840ae7eed181010"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
