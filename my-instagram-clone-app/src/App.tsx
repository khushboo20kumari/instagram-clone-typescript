

import { useState } from 'react';
import './App.css';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./Component/Data";
import Signup from './Component/Signup';

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
                alert("User signed in successfully")
                console.log("User signed in successfully");
            })
            .catch((error) => {
                alert("Error signing in:");
                console.error("Error signing in:", error);
            });
    };


    return (
        <div className="App">
          
             <div className='item' style={{ border: "1px solid blue", width: "50%", height: "100px", background: "lightblue", margin: "10px" }}>
                <Signup setEmail={setEmail} email={email} handleSignup={handleSignup} setPassord={setPassword} password={password} ></Signup>
                {/* <p>Signup Page</p>
                <input onChange={(e) => setEmail(e.target.value)} value={email}></input><br></br>
                <input onChange={(e) => setPassword(e.target.value)} value={password} type="password"></input><br></br>
                <button onClick={handleSignup}>Sign Up</button><br></br> */}
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



// import React from 'react'
// import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
// import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// const App = () => {
//     const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
//     const headerStyle = { margin: 0 }
//     const avatarStyle = { backgroundColor: '#1bbd7e' }
//     const marginTop = { marginTop: 5 }
//     return (
//         <Grid>
//             <Paper elevation={20} style={paperStyle}>
//                 <Grid align='center'>
//                     <Avatar style={avatarStyle}>
//                         <AddCircleOutlineOutlinedIcon />
//                     </Avatar>
//                     <h2 style={headerStyle}>Sign Up</h2>
//                     <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
//                 </Grid>
//                 <form>
//                     <TextField fullWidth label='Name' placeholder="Enter your name" />
//                     <TextField fullWidth label='Email' placeholder="Enter your email" />
//                     <FormControl component="fieldset" style={marginTop}>
//                         <FormLabel component="legend">Gender</FormLabel>
//                         <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
//                             <FormControlLabel value="female" control={<Radio />} label="Female" />
//                             <FormControlLabel value="male" control={<Radio />} label="Male" />
//                         </RadioGroup>
//                     </FormControl>
//                     <TextField fullWidth label='Phone Number' placeholder="Enter your phone number" />
//                     <TextField fullWidth label='Password' placeholder="Enter your password"/>
//                     <TextField fullWidth label='Confirm Password' placeholder="Confirm your password"/>
//                     <FormControlLabel
//                         control={<Checkbox name="checkedA" />}
//                         label="I accept the terms and conditions."
//                     />
//                     <Button type='submit' variant='contained' color='primary'>Sign up</Button>
//                 </form>
//             </Paper>
//         </Grid>
//     )
// }

// export default App;

// import Login from "./Component/Login";
// function App(){
//     return(
//         <div className="App">
//             <Login/>

//         </div>
//     )
// }
// export default App;


// import { useState } from 'react';

// import './App.css';
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// import { app } from "./Component/Data";


// function App() {

//     const [email, setEmail] = useState<string>("");
//     const [password, setPassword] = useState<string>("");
//     const [emailSignin, setEmailSignin] = useState<string>("");
//     const [passwordSignin, setPasswordSignin] = useState<string>("");
//     const auth = getAuth(app);

//     const handleSignup = () => {
//         createUserWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 console.log("User signed up successfully");
//             })
//             .catch((error) => {
//                 console.error("Error signing up:", error);
//             });
//         setPassword("")
//         setEmail("")
//     };

//     const handleSignin = () => {
//         console.log("Email:", emailSignin);
//         console.log("Password:", passwordSignin);

//         signInWithEmailAndPassword(auth, emailSignin, passwordSignin)
//             .then((userCredential) => {
//                 console.log("User signed in successfully");
//             })
//             .catch((error) => {
//                 console.error("Error signing in:", error);
//             });
//     };

//     return (
//         <div className="App">
//             <div className='item' style={{ border: "1px solid blue", width: "50%", height: "100px", background: "lightblue", margin: "10px" }}>
//                 <p>Signup Page</p>
//                 <input onChange={(e) => setEmail(e.target.value)} value={email}></input><br></br>
//                 <input onChange={(e) => setPassword(e.target.value)} value={password} type="password"></input><br></br>
//                 <button onClick={handleSignup}>Sign Up</button><br></br>
//             </div>

//             <div style={{ border: "1px solid red", width: "50%", height: "100px", background: "lightcoral", margin: "10px" }}>
//                 <p>Signin Page</p>
//                 <input onChange={(e) => setEmailSignin(e.target.value)} value={emailSignin}></input><br></br>
//                 <input onChange={(e) => setPasswordSignin(e.target.value)} value={passwordSignin} type="password"></input><br></br>
//                 <button onClick={handleSignin}>Sign In</button><br></br>
//             </div> 
//         </div>
//     );
// }

// export default App;



// import { useState } from 'react';
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// import { app } from "./Data";

// const auth = getAuth(app);

// function Login() {
//     const [email, setEmail] = useState<string>("");
//     const [password, setPassword] = useState<string>("");

//     const handleSignup = () => {
//         createUserWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 console.log("User signed up successfully");
//             })
//             .catch((error) => {
//                 console.error("Error signing up:", error);
//             });
//         setPassword("")
//         setEmail("")
//     };

//     const handleSignin = () => {
//         signInWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 console.log("User signed in successfully");
//             })
//             .catch((error) => {
//                 console.error("Error signing in:", error);
//             });
//     };

//     return (
//         <div>
//             <input onChange={(e) => setEmail(e.target.value)} value={email}></input><br></br>
//             <input onChange={(e) => setPassword(e.target.value)} value={password} type="password"></input><br></br>
//             <button onClick={handleSignup}>Sign Up</button>
//             <button onClick={handleSignin}>Sign In</button>
//         </div>
//     );
// }

// export default Login;

