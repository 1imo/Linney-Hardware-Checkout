"use client"


import styles from './page.module.css'
import { useSession } from "next-auth/react"
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import Nav from '@/components/Nav'
import ChartCrd from '@/components/ChartCrd'
import classes from "./landingPage.module.css"
import SquareCard from '@/components/SquareCrd'
import { useEffect } from 'react'

export default function Home() {
  const { data } = useSession()

  console.log(data)

  
  if (window.innerWidth < window.innerHeight) {
    return <main className={classes.page}>
    <div className={`${classes.nav} ${classes.navMob}`} style={{marginTop:0}}>
     
        <Link href="/" className={classes.navLeft}>
          <Image height={20} width={20} src="./fan.svg" style={{ paddingRight: 10 }} />
        Linney CMS
        </Link>
      
      <div className={classes.navRight}>
          <div className={`${classes.navActions} ${classes.navActionsMob}`} style={{ color: "#6BBF59" }} onClick={() => signIn()}>
          Sign In
          <img src="arrow-up-right-green.svg" style={{paddingLeft:10}} />
        </div>
      </div>
    </div>

    <div className={`${classes.details} ${classes.detailsMob}`} style={{zIndex: 10}}>
      <h1>
        Linney CMS
      </h1>
        <p>Discover a new way to organise your business with our revolutionary
          content management system! Get the <span style={{ color: "#6BBF59", textDecoration: "underline", fontWeight: 500 }}>most</span> out of your data and streamline
          operations for maximum efficiency.</p>
      
      <div className={classes.detailsActions}>
        <button className={classes.getStarted}>Get Started</button>
        <button><img src="./file-question.svg"/>How It Works</button>
      </div>
    </div>

    <section className={`${classes.hero} ${classes.heroMob}`} style={{zIndex: -2}}>
      
        <ChartCrd width={"100%"} height={"240px"} className={classes.chartCrdMob} />
      <div style={{display: 'flex', columnGap: 20}} className={`${classes.cardBar} ${classes.cardBarMob}`}>
        <SquareCard data="returnSoon" number={13} percentage={"10.15%"} />
        <SquareCard data="returnSoon" number={13} percentage={"10.15%"} />
        <SquareCard data="returnSoon" number={13} percentage={"10.15%"} />
      </div>
    </section>
  </main>
  } else {
    return (
    <main>
      <div className={classes.nav}>
       
          <Link href="/" className={classes.navLeft}>
            <img src="./fan.svg" style={{ paddingRight: 10 }} />
          Linney CMS
          </Link>
        
        <div className={classes.navRight}>
          <div>
            <Link href="/docs">
              Documentation
            </Link>
          </div>
          <div onClick={() => window.location.replace("/auth/register")} style={{ color: "#6BBF59" }} className={classes.navActions}>
            Sign Up
          </div>
          <div className={classes.navActions} style={{ color: "#6BBF59" }} onClick={() => signIn()}>
            Sign In
            <img src="arrow-up-right-green.svg" style={{paddingLeft:10}} />
          </div>
        </div>
      </div>

      <div className={classes.details}>
        <h1>
          Linney CMS
        </h1>
        <p>Try the new Business To End-User CMS
          and experience all the amazing features
          it has to offer! From intuitive content
          creation tools to powerful analytics,
          this system is designed to make managing your
          business <span style={{ color: "#6BBF59", textDecoration: "underline", fontWeight: 500 }}>easier</span>  than ever. Get started today
          and see how it can help you reach your goals faster.</p>
        
        <div className={classes.detailsActions}>
          <button className={classes.getStarted}>Get Started</button>
          <button><img src="./file-question.svg"/>How It Works</button>
        </div>
      </div>

      <section className={classes.hero}>
        
        <ChartCrd width={"calc(100vw/4)"} />
        <div style={{display: 'flex', columnGap: 20}} className={classes.cardBar}>
          <SquareCard data="returnSoon" number={13} percentage={"10.15%"} />
          <SquareCard data="returnSoon" number={13} percentage={"10.15%"} />
          <SquareCard data="returnSoon" number={13} percentage={"10.15%"} />
        </div>
      </section>
    </main>
  )
  }

  
}
