"use client"
import React from "react"

import { useSession } from "next-auth/react"
import DesktopNav from "@/components/DesktopNav"
import classes from "../page.module.css"
import ChartCrd from "@/components/ChartCrd"
import SquareCard from "@/components/SquareCrd"
import MiscCard from "@/components/MiscCard"
import MessageCrd from "@/components/MessageCrd"


export default function Dashboard() {

    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            window.location.replace("/")
            
        }
    })

    



   



    
    return <main className={classes.page}>
        <div className={classes.feature}>
            CMS
        </div>
        <section style={window.innerHeight < 900 ? {flexDirection: "column"} : {flexDirection: "row"}}>
            <DesktopNav />
            <section style={window.innerHeight < 900 ? { margin: "0 40px", width: "calc(100vw - 80px)", height: `calc(${window.innerHeight}px - 120px)`, columnGap: 20 } : { margin: "40px calc(100vw / 24) 40px", height: "calc(100vh - 80px)", columnGap: 40 }}>
                
                    

                <div className={classes.dashLeft} style={window.innerHeight < 900 ? {rowGap: 20} : {rowGap: 40}}>
                        <div className={classes.dashLeftTop}>
                            <ChartCrd width={"100%"} height={"100%"} className={classes.chartCrd} />
                        </div>
                        <div className={classes.dashLeftBottom}>
                            <MessageCrd title="Latest Updates From Org Name" data={[{sender: "Sender", organisation: "company", content: "Greetings to all"}, {sender: "Sender", organisation: "company", content: "Greetings to all"}]} />
                        </div>
                    </div>

                    <div className={classes.dashRight}>
                        <div className={classes.dashRightTop}>
                            <div className={classes.dashRightTopHeader}>
                                <h2>Your Activity</h2>
                                <div className={classes.stateSelector}>
                                    <button>Today</button>
                                    <button>Week</button>
                                    <button>Year</button>
                                </div>
                            </div>
                            <div className={classes.smlCrdHolder}>
                                <SquareCard data="returnSoon" number={13} percentage={"10.15%"} />
                                <SquareCard data="returnSoon" number={13} percentage={"10.15%"} />
                                <SquareCard data="returnSoon" number={13} percentage={"10.15%"} />
                            </div>
                        </div>

                        
                        <div className={classes.dashRightBottom}>
                            <MiscCard title="Items To Return Soon" data={[{state: "Late", title: "laptop", location: "someplace", quantity: 1}, {state: "Late", title: "laptop", location: "someplace", quantity: 1}]} />
                            <MiscCard title="Request States" data={[{title: "laptop", quantity: 2, location: "someplace", state: "Pending"}, {title: "laptop", quantity: 2, location: "someplace", state: "Denied"}]} />
                        </div>
                        

                    </div>

            
            </section>
        </section>
    </main>
}