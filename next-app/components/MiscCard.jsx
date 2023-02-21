import Image from "next/image"
import classes from "./MiscCrd.module.css"

export default function MiscCard(props) {
    return <div className={classes.crd}>
    <h2>{props.title}</h2>
    <div className={classes.itemContainer}>
       {props.data.map((item, key) => {
           return <div className={classes.item}>
               <div className={classes.itemLeft}>
                   <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wJTIwZGFya3xlbnwwfHwwfHw%3D&w=1000&q=80" alt={item.title} />
                   <div>
                       <h3>{item.title}</h3>
                       <div>{item.location}</div>
                   </div>
               </div>
               <div className={classes.itemRight}>
                   <div style={{color: "#fff"}}>{item.quantity + "x"}</div>
                   <div style={item.state == "Late" ? {color: "#ff0000"} : {color: "#fff"}}>{item.state}</div>
               </div>
        </div>
    })} 
    </div>
    
</div>
}