
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAAYLz-Wj8Yo8TpcTsVn_RAz2tZkCzK2N8",
  authDomain: "instagram-9e8bc.firebaseapp.com",
  projectId: "instagram-9e8bc",
  storageBucket: "instagram-9e8bc.appspot.com",
  messagingSenderId: "461435030714",
  appId: "1:461435030714:web:fc4cdffe85b55c6fa74683",
  databaseURL:"https://instagram-9e8bc-default-rtdb.firebaseio.com"
  
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);