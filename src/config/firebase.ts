import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from 'firebase/auth';
// import {...} from 'firebase/database';
// import {...} from 'firebase/firestore';
// import {...} from 'firebase/functions';
// import {...} from 'firebase/storage';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAHxJiostThXXNrcKbxP1G73y0CsPU3Ptw",
    authDomain: "smart-e-commerce-c0d05.firebaseapp.com",
    projectId: "smart-e-commerce-c0d05",
    storageBucket: "smart-e-commerce-c0d05.firebasestorage.app",
    messagingSenderId: "49654758724",
    appId: "1:49654758724:web:ccfd0ee29aa883b9f4eb11"
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
