// import { useState } from "react"
// interface Person {
//     email:string,
//     password:string
// }
// const Signup: React.FC = () => {
//     const [email, setEmail] = useState<string>("")
//     const [password, setPassword] = useState<string>("")
//     const [item, setItem] = useState<any[]>([])

//     const OnChangeEventEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setEmail(event.target.value)
//     }

//     const OnChangeEventPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setPassword(event.target.value)
//     }
//     const OnClickEvent = () => {
//         const data:Person={email:email,password:password}
//         setEmail("")
//         setPassword("")
//         setItem(data)
//     }
//     return (

//         <>
//             <p>Signup page</p>
//             <input className="" onChange={OnChangeEventEmail} value={email}></input>
//             <input className="" onChange={OnChangeEventPassword}></input>
//             <button onClick={OnClickEvent}>Save</button>
//         </>
//     )
// }
// export default Signup;


// import React, { useState } from "react";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
// // import { app } from "./ComData";
// import { app } from "./Data"
// const auth = getAuth(app)

// interface Person {
//     email: string;
//     password: string;
// }



// const Signup: React.FC = () => {
//     const [email, setEmail] = useState<string>("");
//     const [password, setPassword] = useState<string>("");
//     const [item, setItem] = useState<Person | null>(null);

//     const OnChangeEventEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setEmail(event.target.value);
//     };

//     const OnChangeEventPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setPassword(event.target.value);
//     };

//     const OnClickEvent = () => {
//         const data: Person = { email: email, password: password };
//         setEmail("");
//         setPassword("");
//         createUserWithEmailAndPassword(
//             auth,
//             setItem(data);
//         ).then((value) => console.log(value))
//     };
   

//     return (
//         <>
//             <p>Signup page</p>
//             <input className="" onChange={OnChangeEventEmail} value={email} placeholder="Email"></input>
//             <input className="" onChange={OnChangeEventPassword} value={password} placeholder="Password"></input>
//             <button onClick={OnClickEvent}>Save</button>
//         </>
//     );
// };

// export default Signup;


// import React, { useState } from "react";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { app } from "./Data";

// const auth = getAuth(app);

// interface Person {
//     email: string;
//     password: string;
// }

// const Signup: React.FC = () => {
//     const [email, setEmail] = useState<string>("");
//     const [password, setPassword] = useState<string>("");

//     const OnChangeEventEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setEmail(event.target.value);
//     };

//     const OnChangeEventPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setPassword(event.target.value);
//     };

//     const OnClickEvent = () => {
//         // const data: Person = { email: email, password: password };
//         setEmail("");
//         setPassword("");
//         createUserWithEmailAndPassword(
//             auth,
//             email,
//             password
//         ).then((userCredential) => {
//             // You can do something with the user data here if needed
//             console.log(userCredential);
//         }).catch((error) => {
//             // Handle errors here
//             console.error("Error signing up: ", error);
//         });
//     };

//     return (
//         <>
//             <p>Signup page</p>
//             <input className="" onChange={OnChangeEventEmail} value={email} placeholder="Email"></input>
//             <input className="" onChange={OnChangeEventPassword} value={password} placeholder="Password"></input>
//             <button onClick={OnClickEvent}>Save</button>
//         </>
//     );
// };

// export default Signup;


const Signup:React.FC=()=>{
    return(
        <>
        </>
    )
}
export default Signup;