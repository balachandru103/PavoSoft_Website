// src/firebase.ts

import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "AIzaSyCBUA3-lqsuppadMe66uxbcV83_NEJQBro",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "techvision-d1e68.firebaseapp.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "techvision-d1e68",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "techvision-d1e68.firebasestorage.app",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "333694948277",
  appId: process.env.REACT_APP_FIREBASE_APP_ID || "1:333694948277:web:4f9cfd4bb7133ad50cbffc",
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID || "G-DVDXX0VXE6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics (only if supported)
let analytics: ReturnType<typeof getAnalytics> | null = null;

isSupported().then((yes) => {
  if (yes) {
    analytics = getAnalytics(app);
  }
});

export { app, analytics };
