// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDqu4s3tRKkdZp_sdikq7yzt1uPX5YFVTQ",
    authDomain: "bookstore-f1cd8.firebaseapp.com",
    projectId: "bookstore-f1cd8",
    storageBucket: "bookstore-f1cd8.appspot.com",
    messagingSenderId: "248622001839",
    appId: "1:248622001839:web:04622c15158bcef02fee5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);