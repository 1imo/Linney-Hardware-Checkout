"use client"
import { useState, useEffect } from "react"
import classes from "./Crd.module.css"

export default function SquareCard(props) {
    const [data, setData] = useState({image: "", title: ""})

    
    useEffect(() => {
       if (props.data == "returnSoon") {
        setData({
            image: "arrow-down-left.svg",
            title: "Items To Be Returned Soon"
        })
    } 
    }, [])




    return <div className={`${classes.crd} ${classes.crdSquare}`}>
        <div className={classes.squareTop}>
            <img src={data.image} />
            <div>{data.title}</div>
        </div>
        <div className={classes.squareBottom}>
            <div className={classes.bottomFocus}>{props.number}</div>
            <div className={classes.bottomSupport}>{props.percentage}</div>
        </div>
    </div>
}