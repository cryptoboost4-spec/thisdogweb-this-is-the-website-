// firebase.ts - Firebase Configuration
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getFunctions } from 'firebase/functions';

// TODO: Replace with your Firebase project configuration
// Get this from: Firebase Console > Project Settings > General > Your apps > Web app
const firebaseConfig = {
  apiKey: "AIzaSyB-I5pJagL996vL6I7NtX3exhOylF63_RM",
  authDomain: "claudebestiesweb.firebaseapp.com",
  projectId: "claudebestiesweb",
  storageBucket: "claudebestiesweb.firebasestorage.app",
  messagingSenderId: "853245938654",
  appId: "1:853245938654:web:aebc5c67a4891e74c7ab4f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const db = getFirestore(app);
export const functions = getFunctions(app);