import { initializeApp } from 'firebase/app';
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyC-sBJOI45pJZTrRMXDlmQrRN2XQAfC0nM",
    authDomain: "court-app-authentication.firebaseapp.com",
    projectId: "court-app-authentication",
    storageBucket: "court-app-authentication.appspot.com",
    messagingSenderId: "415349498952",
    appId: "1:415349498952:web:af4fbcec7bd58404eee47d",
    measurementId: "G-Y90YWJW66C"
  };
const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default firebaseApp;
