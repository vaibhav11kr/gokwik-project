import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCV61f_tQ20WsQsSVhpbJiftSc5CBvoUzY",
  authDomain: "login-gokwik.firebaseapp.com",
  projectId: "login-gokwik",
  storageBucket: "login-gokwik.appspot.com",
  messagingSenderId: "705373547456",
  appId: "1:705373547456:web:16833c2a48ad969b403625"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
