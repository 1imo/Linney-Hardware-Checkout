"use client"


import React from "react";
import { useState, useEffect } from "react";
import classes from "./DesktopNav.module.css"
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import axios from "axios";

export default function DesktopNav(props) {

    const { data: session, status } = useSession()
    const [name, setName] = useState("Loading...")

    
    if (status === "authenticated") {
        console.log(session)
        if (session?.user) {
            console.log("POST")
            let obj = {
               email: session?.user.email,
                type: "user" 
            }
            
            
            axios.post("/api/fetchData", obj).then(res => {
                console.log(res.data)
                setName(res.data.name.join(" "))
            })  
            }
            
            
            
            
            
        
        
    } 
  
        
    

    


    

    return <div className={classes.nav}>
        <div className={classes.logo}>
            <img src="/fan.svg" />
            <div>Linney CMS</div>
        </div>

        <img src="https://engineering.unl.edu/images/staff/Kayla-Person.jpg" />

        <div className={classes.quickInfo}>
            <div style={{marginBottom: 0, color: "#ABA9B2", fontWeight: 500, fontSize: 10}}>Welcome Back</div>
            <div style={{fontSize: 20}}>{name}</div>
            <div style={{fontSize: 10}}>Organisation Name</div>
        </div>

        <div className={classes.navigation}>
            <div >
                <Link href={"/dashboard"}>
                    <img src="/home.svg" alt="Home" />
                    <h2 style={{color: "#fff"}}>Home</h2>
                </Link>
                <Link href={"/browse"}>
                    <img src="/library.svg" alt="Browse" />
                    <h2>Browse</h2>
                </Link>
                <Link href={"/search"}>
                    <img src="/search.svg" alt="Search" />
                    <h2>Search</h2>
                </Link>
                <Link href={"/documentation"}>
                    <img src="/message-square.svg" alt="Support" />
                    <h2>Support</h2>
                </Link>
                <Link href={"/organisation"}>
                    <img src="/building.svg" alt="Organisation" />
                    <h2>Organisation</h2>
                </Link>
                <Link href={"/info"}>
                    <img src="/info.svg" alt="Information" />
                    <h2>Information</h2>
                </Link>
            </div>

            <div style={{rowGap: 20}}>
                <Link href={"/settings"}>
                    <img src="/settings.svg" alt="Settings" />
                    <h2>Settings</h2>
                </Link>
                <div onClick={() => signOut()}>
                    <img src="/log-out.svg" alt="Sign Out" />
                    <h2>Sign Out</h2>
                </div>
            </div>
        </div>
       
    </div>

}