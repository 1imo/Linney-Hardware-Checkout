"use client"
import classes from "../auth/auth.module.css"
import Link from "next/link"
import { useRef } from "react"
import axios from "axios"
import { useSession } from "next-auth/react"

export default function CreateItem() {
    const {data:session} = useSession()

    const create = async () => {
        const res = await axios.post("/api/item", {
            orgName: "temp",
            
        })
    }

    

    if (window.innerWidth < window.innerHeight) {
        return <main className={classes.entire}>
            <div className={classes.nav}>
       
                <Link href="/" className={classes.navLeft}>
                    <img src="/fan.svg" style={{ paddingRight: 10 }} />
                    Linney CMS
                </Link>
            </div>
        
            <div className={classes.page}>
                <section className={`${classes.left} ${classes.contentMob}`}>
                    <div>
                    <h1>Create!</h1>
                        <div>
                            
                            <input type="text" placeholder="Name Of Item?" />
                        </div>
                        <div>
                            
                            <input type="number" placeholder="Qty In Stock?"  />
                        </div>
                        <div className={classes.textArea}>
                           
                            <textarea type="text" placeholder="Description Of Item?"  />
                        </div>
                        <button className={classes.ctaButton} onClick={() => create()} style={{ backgroundColor: "#36B452", marginTop: 10, fontWeight: 500 }}>Create</button>
                    </div>
                </section>
                
            
            </div>
        </main>
    } else {

        return <main className={classes.entire}>
            <div className={classes.nav}>
       
                <Link href="/" className={classes.navLeft}>
                    <img src="/fan.svg" style={{ paddingRight: 10 }} />
                    Linney CMS
                </Link>
     
                
            </div>
        
            <div className={classes.page}>
                <section className={classes.left}>
                    <div>
                        <h1>Create!</h1>
                        <div>
                            
                            <input type="text" placeholder="Name Of Item?" />
                        </div>
                        <div>
                            
                            <input type="number" placeholder="Qty In Stock?"  />
                        </div>
                        <div className={classes.textArea}>
                           
                            <textarea type="text" placeholder="Description Of Item?"  />
                        </div>
                        <button className={classes.ctaButton} onClick={() => create()} style={{ backgroundColor: "#36B452", marginTop: 10, fontWeight: 500 }}>Create</button>
                        
                    </div>
                </section>
                <section className={classes.right}>
                    <div>Create Create</div>
                    <div>Create Create</div>
                    <div>Create Create</div>
                    

                </section>
            
            </div>
        </main>
    }
}