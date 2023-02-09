import React from "react";
import { useRef, useState, useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import UserContext from "../../str/UserContext";
import classes from "./Login.module.css";
import axios from "axios";

function Login() {
    const email = useRef();
    const password = useRef();
    const confirmPassword = useRef();
    const name = useRef();
    const location = useLocation();

    const UserCtx = useContext(UserContext);
    const navigate = useNavigate();


    const login = () => {
        UserCtx.logInWithEmailAndPassword(email.current.value, password.current.value)
    }

    

    const signUp = async () => {
        if (password.current.value === confirmPassword.current.value) {
            let res = await UserCtx.registerWithEmailAndPassword(name.current.value, email.current.value, password.current.value)
            if (res == 1) {
                navigate("/details")
            }
        }

    };

    useEffect(() => {
        if (UserCtx.user) {
            if (location.state.referredFrom) {
                navigate(location.state.referredFrom)
            } else {
                navigate("/dashboard")

            }
        }
    }, [UserCtx.user])

    const content = [<div className={classes.inputs}>
        <div>
           <label>Email:</label>
            <input type="email" ref={email} /> 
        </div>
        <div>
           <label>Password:</label>
            <input type="password" ref={password} /> 
        </div>
        <button className={classes.ctaBtn} onClick={login}>Login</button>

        <ul className={classes.actions}>
           
            <li className={classes.left}>
                Forgot Email?
            </li>
            
            <li className={classes.dot}><div>&nbsp;</div></li>
    
            <li className={classes.right}>
                Forgot Password?
            </li>

        </ul>

        
        
    </div>,
        <div className={classes.inputs}>
            <div>
               <label>Name:</label>
                <input type="text" ref={name} /> 
            </div>
            <div>
                <label>Email:</label>
                <input type="email" ref={email} />  
            </div>
            <div>
                <label>Password:</label>
                <input type="password" ref={password} />
            </div>
            <div>
                <label>Confirm Password:</label>
                <input type="password" ref={confirmPassword} />
            </div>
            <button className={classes.ctaBtn} onClick={signUp}>Sign Up</button>
            
    </div>]

    const [inputs, setInputs] = useState(0)
    const [positioning, setPositioning] = useState({transform: "translate(-50%, 5px)"})

    const changeEntrance = (position) => {
        if (position === 1) {
            setInputs(1)
            setPositioning({
                transform: "translate(50%, 5px)",
                borderRadius: "0 20px 20px 0",
                transition: "all 0.3s ease-in-out"
            })
        } else {
            setInputs(0)
            setPositioning({
                transform: "translate(-50%, 5px)",
                borderRadius: "20px 0 0 20px",
                transition: "all 0.3s ease-in-out"
            })


        }
    }


    return (
        <div className={classes.page}>
            <div className={classes.content}>
                <div className={classes.headerEntire}>
                    <div className={classes.header}>
                    <div className={classes.headerHeading} onClick={() => changeEntrance(0)}>
                            Login
                        </div>
                        <div className={classes.headerHeading} onClick={() => changeEntrance(1)}>
                            New?
                        </div> 
                    </div>
                    
                    <div className={classes.line} style={positioning}>&nbsp;</div>
                </div>

                <div>
                    {content[inputs]}
                </div>
                <ul className={classes.alternativeSignin}>
            <li onClick={() => UserCtx.signInWithGoogle()}>
                <img src={"google.svg"} alt="google signin" />
            </li>
            <li onClick={() => UserCtx.signInWithGithub()}>
                <img src={"github.svg"} alt="github signin" />
            </li>
        </ul>
            </div>
        </div>
        
    );
}

export default Login;