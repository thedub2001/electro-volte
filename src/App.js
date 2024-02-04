import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCnqXUtksMFfxV2jVY4xHqiV6TNt2-d1Q",
  authDomain: "electro-volte.firebaseapp.com",
  projectId: "electro-volte",
  storageBucket: "electro-volte.appspot.com",
  messagingSenderId: "306551809094",
  appId: "1:306551809094:web:8a391c27fe451507529647",
  measurementId: "G-JQQJEJ4K7G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;