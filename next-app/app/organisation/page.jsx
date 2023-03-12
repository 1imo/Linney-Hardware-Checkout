"use client"
import React from "react"

import { useSession } from "next-auth/react"
import DesktopNav from "@/components/DesktopNav"
import classes from "../page.module.css"

export default function Organisation() {
    return <main className={classes.page}>
        <div className={classes.feature}>
            &nbsp;
        </div>
        <DesktopNav />
    </main>
}