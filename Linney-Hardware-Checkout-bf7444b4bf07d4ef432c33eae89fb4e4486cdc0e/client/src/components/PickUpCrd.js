import React from "react";
import classes from "./PickUpCrd.module.css";

function PickUpCrd() {
    
    return <div className={classes.card}>
        <div className={classes.left}>
            QR Codes for Collection
        </div>
        <div className={classes.right}>
            <img src={"./screen-share.png"} alt="Share Pick Up Codes"/>
            <img src={"./qr-code.png"} alt="View Pick Up Codes"/>
        </div>
    </div>
}

export default PickUpCrd;