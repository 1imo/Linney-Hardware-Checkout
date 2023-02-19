"use client"
import React from "react"

import { useSession } from "next-auth/react"
import DesktopNav from "@/components/DesktopNav"


export default function Dashboard() {

    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            window.location.replace("/")
            
        }
    })

    



   



    
    return <div>
        <DesktopNav />
    </div>
}