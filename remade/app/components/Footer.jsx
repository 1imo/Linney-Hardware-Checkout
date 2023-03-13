import Link from "next/link"
import classes from "./Footer.module.css"

export default function Footer() {
    return <section className={classes.footer}>
        <div className={classes.content}>
           <div className={classes.rightContent}>
                <div className={classes.header}>Content Management System</div>
                <div>
                   <div>By timCo</div>
                   <div>timHoy05@gmail.com</div>
                </div>
            </div>
            <div>
                <Link href="#">Home</Link>
                <Link href="#">Sign Up</Link>
                <Link href="#">Sign In</Link>
                <Link href="#">Support</Link>
            </div> 
        </div>

        <div className={classes.finalTouch}>
            All Rights Reserved timCoⓒ
        </div>
        
    </section>
}