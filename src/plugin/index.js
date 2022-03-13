// Initialize Cloud Firestore through Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyCXKKZxrZpN0rykvHxqhl228E6odgfvvPc",
  authDomain: "projectapp-b5916.firebaseapp.com",
  projectId: "projectapp-b5916",
  storageBucket: "projectapp-b5916.appspot.com",
  messagingSenderId: "873123244532",
  appId: "1:873123244532:web:4fdd78ae300e66fbddb1a1",
  measurementId: "G-2DQ7BL9LK5",
});

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const storage = getStorage(firebaseApp);
export { db, auth, storage };
