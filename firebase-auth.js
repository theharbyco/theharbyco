import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAe_SMY2YU2xXFP79zGMnbw_zKnzLmvhno",
  authDomain: "theharbyco.firebaseapp.com",
  projectId: "theharbyco",
  storageBucket: "theharbyco.firebasestorage.app",
  messagingSenderId: "241710496520",
  appId: "1:241710496520:web:8d8caaf54e30731e9d8abd",
  measurementId: "G-2SRRTGN77K"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
