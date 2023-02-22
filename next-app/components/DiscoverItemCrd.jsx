"use client"
import classes from "./DiscoverCrd.module.css"

export default function DiscoverItemCrd(props) {
    return <div className={classes.crd} onClick={() => window.location.href = "/item/1"}>
        <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wJTIwZGFya3xlbnwwfHwwfHw%3D&w=1000&q=80"/>
        <div className={classes.info}>
            <div>
                Laptop
            </div>
            <div>
                <img src="/star-full.svg"/>
                <img src="/star-full.svg"/>
                <img src="/star-full.svg"/>
                <img src="/star-full.svg"/>
                <img src="/star-empty.svg"/>
            </div>
        </div>
    </div>
}