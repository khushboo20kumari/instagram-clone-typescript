


import './App.css';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./Component/Data";
import React, { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailSignin, setEmailSignin] = useState<string>("");
  const [passwordSignin, setPasswordSignin] = useState<string>("");

  const handleSignup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("User signed up successfully");
      })
      .catch((error) => {
        console.error("Error signing up:", error);
      });
     setPassword("")
     setEmail("") 
  };

  const handleSignin = () => {
    console.log("Email:", emailSignin);
    console.log("Password:", passwordSignin);
    
    signInWithEmailAndPassword(auth, emailSignin, passwordSignin)
      .then((userCredential) => {
        console.log("User signed in successfully");
      })
      .catch((error) => {
        console.error("Error signing in:", error);
      });
  };
  

  return (
    <div className="App">
      <div className='item' style={{ border: "1px solid blue", width: "50%", height: "100px", background: "lightblue", margin: "10px" }}>
        <p>Signup Page</p>
        <input onChange={(e) => setEmail(e.target.value)} value={email}></input><br></br>
        <input onChange={(e) => setPassword(e.target.value)} value={password} type="password"></input><br></br>
        <button onClick={handleSignup}>Sign Up</button><br></br>
      </div>

      <div style={{ border: "1px solid red", width: "50%", height: "100px", background: "lightcoral", margin: "10px" }}>
        <p>Signin Page</p>
        <input onChange={(e) => setEmailSignin(e.target.value)} value={emailSignin}></input><br></br>
        <input onChange={(e) => setPasswordSignin(e.target.value)} value={passwordSignin} type="password"></input><br></br>
        <button onClick={handleSignin}>Sign In</button><br></br>
      </div>
    </div>
  );
}

export default App;
