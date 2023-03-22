// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyARriNE0DvCaHOHPYyYgnfTxKNUJsukKgI',
  authDomain: 'note-app-fullstack.firebaseapp.com',
  projectId: 'note-app-fullstack',
  storageBucket: 'note-app-fullstack.appspot.com',
  messagingSenderId: '871809995609',
  appId: '1:871809995609:web:a681669ba3934428f8b248',
  measurementId: 'G-CKD68W5NBE'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
