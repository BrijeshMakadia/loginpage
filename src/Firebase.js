import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
 
const firebaseConfig = {
    apiKey: "AIzaSyA_GJdPzoagGw1L6Mh_kuYX86FZG2UAzSI",
    authDomain: "login-page-8c54d.firebaseapp.com",
    projectId: "login-page-8c54d",
    storageBucket: "login-page-8c54d.appspot.com",
    messagingSenderId: "891674081051",
    appId: "1:891674081051:web:71fb03f0bbaae54d0b45be"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;