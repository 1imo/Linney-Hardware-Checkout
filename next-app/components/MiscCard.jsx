import Image from "next/image"
import classes from "./MiscCrd.module.css"

export default function MiscCard(props) {
    return <div className={classes.crd}>
        <div className={classes.title}><h2>{props.title}</h2></div>
        <div className={classes.container}>
            {props.data.map((item, index) => {
                return <div key={index} className={classes.data}>
                    <Image src={"/api/images/" + item.name} width="30" height="30" />
                    <div>
                        <div>{item.name}</div>
                        <div>{item.state}</div>
                    </div>
                </div>
            })}
        </div>
    </div>
}