// src/firebase.ts

import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBUA3-lqsuppadMe66uxbcV83_NEJQBro",
  authDomain: "techvision-d1e68.firebaseapp.com",
  projectId: "techvision-d1e68",
  storageBucket: "techvision-d1e68.firebasestorage.app",
  messagingSenderId: "333694948277",
  appId: "1:333694948277:web:4f9cfd4bb7133ad50cbffc",
  measurementId: "G-DVDXX0VXE6"
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
