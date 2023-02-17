"use client"

import React from "react";
// import classes from "./onboarding.module.css"
import classes from "../auth/auth.module.css"
import { useState, useRef } from "react";

export default function Onboarding() {
    const [data, setData] = useState({})
    const [contentPosition, setContentPosition] = useState(0)
    const [pageTwo, setPageTwo] = useState(<input type="text" placeholder="Join Code"/>)
    const firstName = useRef()
    const lastName = useRef()

    const nextPage = (page) => {
        setContentPosition(page)

        if (page == 1) {
            setData({
                firstName: firstName.current.value,
                lastName: lastName.current.value
            })
        }
    }

    const switchAccountType = (accountType) => {
        if (accountType == 2) {
            setPageTwo(
                <input type="text" placeholder="Company Name" />
            )
        } else {
            setPageTwo(
                <input type="text" placeholder="Join Code" />
            )
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
        <div>
            <div onClick={() => switchAccountType(1)}>Join</div>
            <div onClick={() => switchAccountType(2)}>Create</div>
            <div className={classes.line}>&nbsp;</div>
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