import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBl__OdBxl15CcHsNf6uwNwlMxHirecSB8",
    authDomain: "theharbyco-cf89c.firebaseapp.com",
    projectId: "theharbyco-cf89c",
    storageBucket: "theharbyco-cf89c.firebasestorage.app",
    messagingSenderId: "125633279020",
    appId: "1:125633279020:web:a63d1c16652795c5d00d89",
    measurementId: "G-G88QMF19M6"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
