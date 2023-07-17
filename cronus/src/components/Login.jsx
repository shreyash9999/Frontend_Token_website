import { useState } from "react"
import "./login.scss"
import { signInWithEmailAndPassword  } from "firebase/auth";
import {auth} from "../firebase"
import { useNavigate } from "react-router-dom";




export default function login(){

    const[error, setError] = useState(false)
    const[email, setEmail] = useState("")
    const[password, setPassword] =useState("")

    const navigate = useNavigate()

    const handleLogin = (e) =>{
        e.preventDefault()

    
    signInWithEmailAndPassword (auth, email, password)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigate("/DashBoard")
      
        })
        .catch((error) => {
            setError(true)
        // ..
  });

    }

    return(
    
    <div className="login">   
    <form onSubmit={handleLogin}>
        <h3 >Login </h3>
    <label><input type="email" onChange={e=>setEmail(e.target.value)} /></label>
    <label><input type="password" onChange={e=>setPassword(e.target.value)}/></label>
        <button type="submit">Login</button>
        {error && <span>Wrong email or password!</span>}
    </form>
    </div>
    
    )
    
}