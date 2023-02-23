"use client"

import Link from 'next/link'
import { signIn } from 'next-auth/react'
import Image from 'next/image'

import classes from "./landingPage.module.css"


export default function Home() {

  
  if (window.innerWidth < window.innerHeight) {
    return <main className={classes.page}>
    <div className={`${classes.nav} ${classes.navMob}`} style={{marginTop:0}}>
     
        <Link href="/" className={classes.navLeft}>
          <Image height={20} width={20} src="./fan.svg" style={{ paddingRight: 10 }} />
        Linney CMS
        </Link>
      
      <div className={classes.navRight}>
          <div className={classes.navActions} style={{ color: "#36B452", cursor: "pointer" }} onClick={() => signIn()}>
            Sign In
            <img src="arrow-up-right.svg" style={{paddingLeft:10}} />
          </div>
      </div>
    </div>

    <div className={`${classes.details} ${classes.detailsMob}`} style={{zIndex: 10}}>
      <h1>
        Linney CMS
      </h1>
        <p>Discover a new way to organise your business with our revolutionary
          content management system! Get the most out of your data and streamline
          operations for maximum efficiency.</p>
      
      <div className={classes.detailsActions}>
          <Link className={classes.getStarted} href={"/auth/register"}>Get Started</Link>
          <Link href={"/documentation"}>Documentation</Link>
      </div>
    </div>

    
  </main>
  } else {
    return (
    <main className={classes.page}>
      <div className={classes.nav}>
       
          <Link href="/" className={classes.navLeft} style={{cursor: "pointer"}}>
            <img src="./fan.svg" style={{ paddingRight: 10 }} />
          Linney CMS
          </Link>
        
        <div className={classes.navRight}>
          <div>
            <Link href="/docs" style={{cursor: "pointer"}}>
              Documentation
            </Link>
          </div>
          <Link href={"/auth/register"} style={{ color: "#36B452", cursor: "pointer" }} className={classes.navActions}>
            Sign Up
          </Link>
          <div className={classes.navActions} style={{ color: "#36B452", cursor: "pointer" }} onClick={() => signIn()}>
            Sign In
            <img src="arrow-up-right.svg" style={{paddingLeft:10}} />
          </div>
        </div>
      </div>

      <div className={classes.details}>
        <h1>
          Linney CMS
        </h1>
        <p>Discover a new way to organise your business with our revolutionary
          content management system! Get the most out of your data and streamline
          operations for maximum efficiency.</p>
        
        <div className={classes.detailsActions}>
          <Link className={classes.getStarted} href={"/auth/register"}>Get Started</Link>
          <Link href={"/documentation"}>Documentation</Link>
        </div>
      </div>

      
    </main>
  )
  }

  
}
