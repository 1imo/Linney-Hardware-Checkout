"use client"
import BrickBreaker from "../components/brickBreaker";
import NavBar from "../components/NavBar";
import classes from "./dashboard.module.css"
import { useState } from "react";

export default function Dashboard() {

    const [content, setContent] = useState("Hover Over To Start")

    document.querySelector("body").addEventListener("mouseover", (e) => {
        console.log("hit")
    })

    if (window?.innerHeight > window.innerWidth) {

        return <main>
            <NavBar />

            <section className={classes.page}>
                <section className={classes.left}>
                    <h1>Welcome Back Name</h1>
                </section>
                <section className={classes.right}>
                    <div>
                        <img src="/arrow-up-right.svg" alt="On Loan" />
                        <h2>66</h2>
                    </div>

                    <div>
                        <img src="/arrow-down-left.svg" alt="Loaned Out" />
                        <h2>66</h2>
                    </div>

                    <div>
                        <img src="/alert-triangle.svg" alt="Late" />
                        <h2>00</h2>
                    </div>
                </section>
            </section>
        </main>
        
    } else {
        

   
        return <main>
            <NavBar />

            <section className={classes.page}>
                <section className={classes.left}>
                    <h1>Welcome Back Name</h1>
                    <div onMouseEnter={() => setContent(<BrickBreaker />)} onMouseLeave={() => setContent("Hover Over To Start")}>
                        {content}
                    </div>
                </section>
                <section className={classes.right}>
                    <div>
                        <img src="/arrow-up-right.svg" alt="On Loan" />
                        <h2>66</h2>
                    </div>

                    <div>
                        <img src="/arrow-down-left.svg" alt="Loaned Out" />
                        <h2>66</h2>
                    </div>

                    <div>
                        <img src="/alert-triangle.svg" alt="Late" />
                        <h2>00</h2>
                    </div>
                </section>
            </section>
        </main>
    }
}