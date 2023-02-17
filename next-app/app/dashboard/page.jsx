"use client"
import React from "react"

import { useSession } from "next-auth/react"


export default function Dashboard() {

    const { data } = useSession()

    if (data) {
        if (!data.user.user?.company) {
            window.location.replace("/onboarding")
        }
    } else {
        window.location.replace("/")
        
    }


   



    
    return <div>
        Dashboard
    </div>
}