import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA9IWWs16HtgK1vW0BK0MQPWyuQS1sX0aE",
  authDomain: "game-set-track.firebaseapp.com",
  projectId: "game-set-track",
  storageBucket: "game-set-track.firebasestorage.app",
  messagingSenderId: "68125437709",
  appId: "1:68125437709:web:0e713dfb440ddfbe004a44",
  measurementId: "G-FF8MKT9YT5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };