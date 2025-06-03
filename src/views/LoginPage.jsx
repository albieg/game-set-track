import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { BackgroundSlideshow } from "../components/LoginPhotoShuffle";
import Footer from "../components/Footer";

export default function LoginPage(){
    const [isLoading, setIsLoading] = useState(false);
    const [loginType, setLoginType] = useState("login");
    const [userCredentials, setUserCredentials] = useState({ email: '', password: '' });
    const [error, setError] = useState("");
    const [isVisible, setVisible] = useState(false);

    const navigate = useNavigate();

    const toggle = () => {
      setVisible(!isVisible);
    };

    function handleCredentials(e) {
        setUserCredentials({...userCredentials, [e.target.name]: e.target.value})
    }

    function handleSignup(e) {
        e.preventDefault();
        setError("");

        createUserWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
        .then((userCredential) => {
            const user = userCredential.user;
            navigate('/HomePage');
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
            navigate('/HomePage');
        })
        .catch((error) => {
            setError(error.message);
         });
    }


    return (
        <div className="relative min-h-screen w-full overflow-hidden grid place-items-center">
        
        <BackgroundSlideshow />

        <div className="text-white bg-white/10 backdrop-blur-xs rounded-xl flex justify-center items-center 2xl:w-150 md:w-140 sm:w-120">
        

          <section className="flex flex-col items-center gap-4">

            <h1 className="text-[var(--chartreuse-yellow)] text-3xl md:text-4xl xl:text-5xl goldman-regular prevent-select pt-5 px-3">Game, Set, Track</h1>
            <h1 className="goldman-regular text-sm md:text-lg xl:text-xl text-white/80 prevent-select">Like Letterboxd, but for tennis.</h1>

            <div className="pt-8 flex flex-col items-center gap-4">
            <p className="text-sm md:text-lg text-white mb-4">Login or create an account to continue</p>

            <div className="flex flex-row items-center gap-4 mb-3">

              <button 
                className={loginType == 'login' ? "bg-[var(--meteorite)] p-2 rounded-lg cursor-pointer w-26 transition duration-400 ease-in-out" : "bg-white/30 p-2 rounded-lg cursor-pointer w-26 transition duration-400 ease-in-out"}
                onClick={()=>setLoginType('login')}>
                  Login
              </button>

              <button 
                className={loginType == 'signup' ? "bg-[var(--meteorite)] p-2 rounded-lg cursor-pointer w-26 transition duration-400 ease-in-out" : "bg-white/30 p-2 rounded-lg cursor-pointer w-26 transition duration-400 ease-in-out"}
                onClick={()=>setLoginType('signup')}>
                  Sign Up
              </button>
            </div>

            <div className="flex flex-col items-center gap-4 w-55">

                  <form className="mb-3">
                      <input onChange={(e)=>{handleCredentials(e)}} 
                       className=" focus:outline-[var(--chartreuse-yellow)] outline-2 outline-white/40 rounded-lg p-2 w-55 transition duration-400 ease-in-out"
                       type="text" 
                       name="email" 
                       placeholder="Enter your email"
                        />
                  </form>

                  <form className="form-control ">
                      <input onChange={(e)=>{handleCredentials(e)}}
                      type={!isVisible ? "password" : "text"}
                      className="focus:outline-[var(--chartreuse-yellow)] outline-2 outline-white/40 rounded-lg p-2 w-55 transition duration-400 ease-in-out"
                      name="password"
                      id="password"
                      autoComplete={loginType == 'login' ? "current-password" : "new-password"}
                      placeholder="Enter your password" 
                      required />

                      <div className="flex justify-center items-center pt-4 cursor-pointer">
                        <img className="size-4 mr-2" onClick={toggle} src={isVisible ? "src/assets/showPass-icons/eye-solid.svg" : "src/assets/showPass-icons/eye-slash-solid.svg" }/>
                        <p className="text-sm" onClick={toggle}>{isVisible ? "Hide Password" : "Show Password"}</p>
                        </div>
                  </form>

                  {
                    loginType == 'login' ?
                    <button onClick={(e)=>{handleLogin(e)}} className="cursor-pointer bg-[var(--meteorite)] hover:bg-[var(--chartreuse-yellow)] hover:text-black rounded-lg p-2 w-full mt-3 transition duration-400 ease-in-out">Login</button>
                    : 
                    <button onClick={(e)=>{handleSignup(e)}} className="cursor-pointer bg-[var(--meteorite)] hover:bg-[var(--chartreuse-yellow)] hover:text-black rounded-lg p-2 w-full mt-3 transition duration-400 ease-in-out">Sign Up</button>
                  }

                  {
                    error ?
                    <div className="h-3 mb-4">
                        {error}
                    </div> :
                    <div className="h-3 mb-4">
                    </div>
                  }
                  

                  <p onClick={handlePasswordReset} className="cursor-pointer decoration-solid m-3 hover:underline">Forgot Password?</p>
                  
              </div>
              </div>
          </section>
        </div>

        <Footer/>
        
    </div>
    )
}