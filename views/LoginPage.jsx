import { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";

export default function LoginPage(){
    const [isLoading, setIsLoading] = useState(false);
    const [loginType, setLoginType] = useState("login");
    const [userCredentials, setUserCredentials] = useState({ email: '', password: '' });
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
        email && alert("Email sent! Check your inbox and you will find the instructions to reset your password.");
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
        <div className="bg-[url(assets/shep-mcallister-photo.jpg)] bg-cover grid place-items-center min-h-screen w-full">

        <div className="text-amber-50 bg-white/10 backdrop-blur-xs rounded-xl grid place-items-center h-160 w-140">

          <section className="flex flex-col items-center gap-4">

            <h1 className="text-(--chartreuse-yellow) text-4xl goldman-regular prevent-select">Game, Set, Track</h1>
            <h1 className="goldman-regular text-md text-white/80 prevent-select">Like Letterboxd, but for tennis.</h1>

            <div className="pt-10 flex flex-col items-center gap-4">
            <p className="text-lg text-white mb-5">Login or create an account to continue</p>

            <div className="flex flex-row items-center gap-4 mb-3">

              <button 
                className={loginType == 'login' ? "bg-(--meteorite) p-2 rounded-lg cursor-pointer w-26" : "bg-white/30 p-2 rounded-lg cursor-pointer w-26"}
                onClick={()=>setLoginType('login')}>
                  Login
              </button>

              <button 
                className={loginType == 'signup' ? "bg-(--meteorite) p-2 rounded-lg cursor-pointer w-26" : "bg-white/30 p-2 rounded-lg cursor-pointer w-26"}
                onClick={()=>setLoginType('signup')}>
                  Sign Up
              </button>
            </div>

            <form className="flex flex-col items-center gap-4 w-55">

                  <div className="mb-3">
                      <input onChange={(e)=>{handleCredentials(e)}} 
                       className=" focus:outline-(--chartreuse-yellow) outline-2 outline-white/40 rounded-lg p-2 w-55"
                       type="text" 
                       name="email" 
                       placeholder="Enter your email"
                        />
                  </div>

                  <div className="form-control">
                      <input onChange={(e)=>{handleCredentials(e)}}
                      className=" focus:outline-(--chartreuse-yellow) outline-2 outline-white/40 rounded-lg p-2 w-55"
                      type="password"
                      name="password"
                      placeholder="Enter your password" />
                  </div>

                  {
                    loginType == 'login' ?
                    <button onClick={(e)=>{handleLogin(e)}} className="cursor-pointer bg-(--meteorite) hover:bg-(--chartreuse-yellow) hover:text-black rounded-lg p-2 w-full mt-3">Login</button>
                    : 
                    <button onClick={(e)=>{handleSignup(e)}} className="cursor-pointer bg-(--meteorite) hover:bg-(--chartreuse-yellow) hover:text-black rounded-lg p-2 w-full mt-3">Sign Up</button>
                  }

                  {
                    error &&
                    <div className="error">
                        {error}
                    </div>
                  }
                  

                  <p onClick={handlePasswordReset} className="cursor-pointer decoration-solid m-8 hover:underline ">Forgot Password?</p>
                  
              </form>
              </div>
          </section>
        </div>
        </div>
        </>
    )
}