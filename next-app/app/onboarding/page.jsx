"use client"

import React from "react";
// import classes from "./onboarding.module.css"
import classes from "../auth/auth.module.css"
import { useState, useRef } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Onboarding() {
    const { data: session } = useSession()
    console.log(session)
    const [data, setData] = useState({})
    const [contentPosition, setContentPosition] = useState(0)
    const firstName = useRef()
    const lastName = useRef()
    const companyName = useRef()
    const joinCode = useRef()
    const [pageTwo, setPageTwo] = useState()
    const router = useRouter()

    

    const createCompany = async () => {
        console.log("CLICK NOW")
        if (session?.user) {

           const res = await axios.post("/api/onboarding", {
               company: companyName.current.value,
               user: data,
               email: session.user.email

           }) 
           console.log(res)
            
            if (res.data == true) {
                // window.location.replace("/dashboard")
                router.push("/dashboard")
                
            }
            
        }
        
    }
    
    const joinCompany = async () => {
        console.log("CLICK NOW")
        
        
          const res = await axios.post("/api/onboarding", {
                joinCode: joinCode.current.value,
              user: data,
                email: session.user.email
          })
        
          console.log(res)

            if (res.data == true) {
                // window.location.replace("/dashboard")
                router.push("/dashboard")
                
                
            }
            
        
            
        
    }



    const switchAccountType = (accountType) => {
        if (accountType == 2) {
            setPageTwo(
                <div className={classes.interface}>
                    <input type="text" placeholder="Company Name" ref={companyName} />
                    <button onClick={() => createCompany()} style={{backgroundColor: "#6BBF59"}}>Create</button>
                </div>
            )
            document.querySelector(".line").style.transform = "translateX(100%)"
            document.querySelector(".line").style.borderRadius = "0 5px 5px 0"
        } else {
            setPageTwo(
                <div className={classes.interface}>
                    <input type="text" placeholder="Join Code" ref={joinCode} />
                    <button style={{backgroundColor: "#6BBF59"}} onClick={() => joinCompany()}>Join</button>
                </div>
            )
            document.querySelector(".line").style.transform = "translateX(0%)"
            document.querySelector(".line").style.borderRadius = "5px 0 0 5px"


        }
    }

    const nextPage = (page) => {
        setContentPosition(page)

        if (page == 1) {
            setData({
                firstName: firstName.current.value,
                lastName: lastName.current.value
            })

            setPageTwo(<div className={classes.interface}>
                <input type="text" placeholder="Join Code" ref={joinCode}  onClick={() => joinCompany()}/>
                <button style={{backgroundColor: "#6BBF59"}}>Join</button>
            </div>)
        }
    }

    const content = [<div>
        <h1>Lets Get To Know Each Other</h1>
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
            <div className={classes.imageUpload}>
                <img src="/image.svg" />
            </div>
        </div>
        <div>
            
            <input type="text" placeholder="What's Your First Name?" ref={firstName} />
        </div>
        <div>
            
            <input type="text" placeholder="What's Your Last Name?" ref={lastName} />
        </div>
        
        <button onClick={() => nextPage(1)} style={{ backgroundColor: "#6BBF59", marginTop: 10 }}>Register</button>
        
    </div>, <div>
        <div className={classes.switcher}>
            <div>
               <div onClick={() => switchAccountType(1)}>Join</div>
                <div onClick={() => switchAccountType(2)}>Create</div> 
            </div>
            <div className="line">&nbsp;</div>
        </div>

        {pageTwo}
        
    </div>]
    

    if (window.innerWidth < window.innerHeight) {
        return <main className={classes.entire}>
            <div className={classes.nav}>
                <div>
                    <div>
                     <img src="/fan.svg" style={{paddingRight: 10}}/>
                    Linney CMS    
                    </div>
                </div>               
            </div>
        
            <div className={classes.page}>
                <section className={`${classes.left} ${classes.contentMob}`}>
                    {content[contentPosition]}
                </section>
                
            
            </div>
        </main>
    } else {

        return <main className={classes.entire}>
            <div className={classes.nav}>
                <div>
                    <div>
                       <img src="/fan.svg" style={{paddingRight: 10}}/>
                    Linney CMS  
                    </div>
                </div>
            </div>
        
            <div className={classes.page}>
                <section className={classes.left}>
                    {content[contentPosition]}
                </section>
                <section className={classes.right}></section>
            
            </div>
        </main>
    }
    
}