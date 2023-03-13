import Link from "next/link"
import classes from "./NavBar.module.css"

export default function NavBar() {
    return <nav className={classes.nav}>
        <Link href="/dashboard" className={classes.logo}><img src="./logo.png" alt="Logo" /></Link>
        <div className={classes.mainLinks}>
            <Link href="#">Home <div style={{display: "none"}}>&nbsp;</div></Link>
            <Link href="#">Browse <div style={{display: "none"}}>&nbsp;</div></Link>
            <Link href="#">Cart <div style={{display: "none"}}>&nbsp;</div></Link>
        </div>
        <div className={classes.profileImage}>
            &nbsp;
        </div>
    </nav>
}