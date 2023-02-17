"use client"
import { useRef } from 'react'
import classes from "../auth.module.css"
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import axios from 'axios'


export default function Register() {
    const email = useRef()
    const pass = useRef()
    const confirmPass = useRef()

    const signUp = async () => {
        if (pass.current.value == confirmPass.current.value) {
           const res = await axios.post("/api/signup", {
            email: email.current.value,
            pass: pass.current.value
           }) 
            console.log(res)
        }
        
    }


    if (window.innerWidth < window.innerHeight) {
        return <main className={classes.entire}>
            <div className={classes.nav}>
       
                <Link href="/" className={classes.navLeft}>
                    <img src="/fan.svg" style={{ paddingRight: 10 }} />
                    Linney CMS
                </Link>
     
                <div className={classes.navRight}>
                    <div className={classes.navActions} style={{ color: "#2B2A2F" }} onClick={() => signIn()}>
                        Sign In
                        <img src="/arrow-up-right.svg" style={{ paddingLeft: 10 }} />
                    </div>
                </div>
            </div>
        
            <div className={classes.page}>
                <section className={`${classes.left} ${classes.contentMob}`}>
                    <div>
                        <h1>Hi There!</h1>
                        <div>
                            
                            <input type="text" ref={email} placeholder="Enter Your Email" />
                        </div>
                        <div>
                            
                            <input type="password" placeholder="----------" ref={pass} />
                        </div>
                        <div>
                            
                            <input type="password" placeholder="Confirm Your Password" ref={confirmPass} />
                        </div>
                        <button onClick={() => signUp()} style={{ backgroundColor: "#6BBF59", marginTop: 10 }}>Register</button>
                        <div style={{ textAlign: "center", color: "#ABA9B2", fontSize: 15 }}>
                            Or
                        </div>
                        <button>Sign In With Google</button>
                        <button>Sign In With Github</button>
                    </div>
                </section>
                
            
            </div>
        </main>
    } else {

        return <main className={classes.entire}>
            <div className={classes.nav}>
       
                <Link href="/" className={classes.navLeft}>
                    <img src="/fan.svg" style={{ paddingRight: 10 }} />
                    Linney CMS
                </Link>
     
                <div className={classes.navRight}>
                    <div>
                        <Link href="/docs">
                            Documentation
                        </Link>
                    </div>
                    <div onClick={() => window.location.replace("/auth/register")} style={{ color: "#2B2A2F" }} className={classes.navActions}>
                        Sign Up
                    </div>
                    <div className={classes.navActions} style={{ color: "#2B2A2F" }} onClick={() => signIn()}>
                        Sign In
                        <img src="/arrow-up-right.svg" style={{ paddingLeft: 10 }} />
                    </div>
                </div>
            </div>
        
            <div className={classes.page}>
                <section className={classes.left}>
                    <div>
                        <h1>Hi There!</h1>
                        <div>
                            
                            <input type="text" ref={email} placeholder="Enter Your Email" />
                        </div>
                        <div>
                            
                            <input type="password" placeholder="----------" ref={pass} />
                        </div>
                        <div>
                           
                            <input type="password" placeholder="Confirm Your Password" ref={confirmPass} />
                        </div>
                        <button onClick={() => signUp()} style={{ backgroundColor: "#6BBF59", marginTop: 10 }}>Register</button>
                        <div style={{ textAlign: "center", color: "#ABA9B2", fontSize: 15 }}>
                            Or
                        </div>
                        <button>Sign In With Google</button>
                        <button>Sign In With Github</button>
                    </div>
                </section>
                <section className={classes.right}></section>
            
            </div>
        </main>
    }
}