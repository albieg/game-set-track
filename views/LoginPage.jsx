import { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";

export default function LoginPage(){
    const [isLoading, setIsLoading] = useState(false);
    const [loginType, setLoginType] = useState("login");
    const [userCredentials, setUserCredentials] = useState({});
    const [error, setError] = useState("");


    function handleCredentials(e) {
        setUserCredentials({...userCredentials, [e.target.name]: e.target.value})
    }

    function handleSignup(e) {
        e.preventDefault();
        setError("");

        createUserWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
        .then((userCredential) => {
            const user = userCredential.user;
        })
        .catch((error) => {
            setError(error.message);
         });
    }

    function handlePasswordReset(){
        const email = prompt("Please type your email");
        sendPasswordResetEmail(auth, email);
        alert("Email sent! Check your inbox and you will find the instructions to reset your password.");
    }

    function handleLogin(e) {
        e.preventDefault();
        setError("");

        signInWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
        .then((userCredential) => {
            const user = userCredential.user;
        })
        .catch((error) => {
            setError(error.message);
         });
    }


    return (
        <>
        
        <div className="container login-page bg-amber-50">
          <section>
            <h1>Welcome to the Game, Set. Match</h1>
            <p>Login or create an account to continue</p>
            <div className="login-type">
              <button 
                className="btn"
                onClick={()=>setLoginType('login')}>
                  Login
              </button>
              <button 
                className="btn"
                onClick={()=>setLoginType('signup')}>
                  Signup
              </button>
            </div>
            <form className="add-form login">
                  <div className="form-control">
                      <label>Email *</label>
                      <input onChange={(e)=>{handleCredentials(e)}} type="text" name="email" placeholder="Enter your email" />
                  </div>
                  <div className="form-control">
                      <label>Password *</label>
                      <input onChange={(e)=>{handleCredentials(e)}} type="password" name="password" placeholder="Enter your password" />
                  </div>
                  {
                    loginType == 'login' ?
                    <button onClick={(e)=>{handleLogin(e)}} className="active btn btn-block">Login</button>
                    : 
                    <button onClick={(e)=>{handleSignup(e)}} className="active btn btn-block">Sign Up</button>
                  }

                  {
                    error &&
                    <div className="error">
                        {error}
                    </div>
                  }

                  <p onClick={handlePasswordReset} className="forgot-password">Forgot Password?</p>
                  
              </form>
          </section>
        </div>
        </>
    )
}