// Import the functions you need from the SDKs you need
import * as firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCtxH1CrxidfTR8KXXk0QGJHFMm1d9Wpgk',
  authDomain: 'fir-login-88a3f.firebaseapp.com',
  projectId: 'fir-login-88a3f',
  storageBucket: 'fir-login-88a3f.appspot.com',
  messagingSenderId: '139535763134',
  appId: '1:139535763134:web:d62efa6b0cded1868440ef',
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
