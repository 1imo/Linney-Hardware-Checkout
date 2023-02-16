"use client"
import { useSession } from "next-auth/react"
import { signOut, signIn } from "next-auth/react"
import Image from "next/image"



export default function Nav() {
    const { data } = useSession()
    return <div>
        {/* {data?.user ? <div>
            <div>{data.user.name}</div>
            <div onClick={() => signOut()}>Sign Out</div>
        </div> :
            <div onClick={() => signIn()}>Sign In</div>} */}
        
        <h1><img src={"vercel.svg"} style={{ width: 20, height: 20, paddingRight: 10 }} /> Linney CMS</h1>
        

    </div>
}