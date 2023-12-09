import React from 'react'
import ReactDOM from 'react-dom/client'
import { initializeApp } from "firebase/app";

import App from './App.jsx'
import './index.css'

const firebaseConfig = {
  apiKey: "AIzaSyCfTmgrvmqjsRG5XB6Ydo1YlKEQ1J3_KW8",
  authDomain: "ecommerce-2c5ac.firebaseapp.com",
  projectId: "ecommerce-2c5ac",
  storageBucket: "ecommerce-2c5ac.appspot.com",
  messagingSenderId: "149188709961",
  appId: "1:149188709961:web:b907fb3dbeae797d5f7998"
};

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
