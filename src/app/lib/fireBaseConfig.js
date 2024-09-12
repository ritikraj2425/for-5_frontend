
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyA7Ne7PyLZFxXq7ZOciYBzLk4EYKhJ4hpU",
    authDomain: "for5-2f928.firebaseapp.com",
    projectId: "for5-2f928",
    storageBucket: "for5-2f928.appspot.com",
    messagingSenderId: "690729228657",
    appId: "1:690729228657:web:6c8b59f47bc90f4af13ed0",
    measurementId: "G-QGXK2J8EXS"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth,provider};
