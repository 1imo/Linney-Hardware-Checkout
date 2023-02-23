"use client"
import { useRef } from "react"
import { signIn } from "next-auth/react"
import classes from "../auth.module.css"
import Link from "next/link"

export default function Register() {


    
    const email = useRef()
    const pass = useRef()
    

    const enter = async () => {
        console.log(email.current.value, pass.current.value)
            
            const result = await signIn("credentials", {
                email: email.current.value,
                password: pass.current.value,
                redirect: true,
                callbackUrl: "/dashboard"
            })
        }

    if (window.innerWidth < window.innerHeight) {
        return <main className={classes.entire}>
            <div className={classes.nav}>
       
                <Link href="/" className={classes.navLeft}>
                    <img src="/fan.svg" style={{ paddingRight: 10 }} />
                    Linney CMS
                </Link>
     
                <div className={classes.navRight}>
                    <div className={classes.navActions} style={{ color: "#2B2A2F" }} onClick={() => window.location.replace("/auth/register")}>
                        Sign Up
                        <img src="/arrow-up-right.svg" style={{ paddingLeft: 10 }} />
                    </div>
                </div>
            </div>
        
            <div className={classes.page}>
                <section className={`${classes.left} ${classes.contentMob}`}>
                    <div>
                        <h1>Welcome Back!</h1>
                        <div>
                            
                            <input type="text" ref={email} placeholder="Enter Your Email" onChange={() => console.log(email.current.value)}/>
                        </div>
                        <div>
                            
                            <input type="password" placeholder="----------" ref={pass} />
                        </div>
                        <button onClick={() => enter()} style={{ backgroundColor: "#36B452", marginTop: 10 }}>Continue</button>
                        <div style={{ textAlign: "center", color: "#36B452", fontSize: 15, background: "none", color: "#fff" }}>
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
                    <Link href={"/auth/register"} style={{ color: "#36B452", cursor: "pointer" }} className={classes.navActions}>
                        Sign Up
                    </Link>
                    <div className={classes.navActions} style={{ color: "#36B452" }} onClick={() => signIn()}>
                        Sign In
                        <img src="/arrow-up-right.svg" style={{ paddingLeft: 10 }} />
                    </div>
                </div>
            </div>
        
            <div className={classes.page}>
                <section className={classes.left}>
                    <div>
                        <h1>Welcome Back!</h1>
                        <div>
                            
                            <input type="text" ref={email} placeholder="Enter Your Email" />
                        </div>
                        <div>
                            
                            <input type="password" placeholder="----------" ref={pass} />
                        </div>
                        <button onClick={() => enter()} style={{ backgroundColor: "#36B452", marginTop: 10 }}>Continue</button>
                        <div style={{ textAlign: "center", color: "#36B452", fontSize: 15, background: "none", color: "#fff" }}>
                            Or
                        </div>
                        <button>Sign In With Google</button>
                        <button>Sign In With Github</button>
                    </div>
                </section>
                <section className={classes.right}>
                    <div>Hey You</div>
                    <div>Hey You</div>
                    <div>Hey You</div>
                </section>
            
            </div>
        </main>
    }
}