"use client"
import React from "react"

import { useSession } from "next-auth/react"
import DesktopNav from "@/components/DesktopNav"
import classes from "../page.module.css"
import ChartCrd from "@/components/ChartCrd"
import SquareCard from "@/components/SquareCrd"
import MiscCard from "@/components/MiscCard"


export default function Dashboard() {

    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            window.location.replace("/")
            
        }
    })

    



   



    
    return <main className={classes.page}>
        <div className={classes.feature}>
            &nbsp;
        </div>
        <section>
            <DesktopNav />
            <div>
                <div className={classes.dashTop}>
                    <ChartCrd width={"50%"} height={"calc(100vh/3 - 60px)"} className={classes.chartCrd} />

                    <div className={classes.dashTopRight}>
                        <div>
                            <h2>Your Activity</h2>
                            <div className={classes.stateSelector}>
                                <button>Today</button>
                                <button>Week</button>
                                <button>Year</button>
                            </div>
                        </div>
                        <div>
                            <SquareCard data="returnSoon" number={13} percentage={"10.15%"} />
                            <SquareCard data="returnSoon" number={13} percentage={"10.15%"} />
                            <SquareCard data="returnSoon" number={13} percentage={"10.15%"} />
                        </div>
                    </div>
                </div>

                <div className={classes.dashBottom}>
                    <div className={classes.dashBottomLeft}>
                        <h2>Latest Updates From Org Name</h2>
                    </div>
                    <div className={classes.dashBottomRight}>
                        <MiscCard title="Items To Return Soon" data={[{name: "item", state: "Late"}, {name: "item", state: "Late"}]} />
                        <MiscCard title="Request States" data={[{name: "item", state: "Pending"}, {name: "item", state: "Denied"}]} />
                    </div>
                </div>
            </div>

            

        </section>
    </main>
}