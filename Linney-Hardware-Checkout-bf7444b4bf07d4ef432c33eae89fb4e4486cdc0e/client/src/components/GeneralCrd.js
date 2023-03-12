import React from 'react';
import classes from "./DataCrd.module.css"


function GeneralCrd(props) {
    return <div className={classes.crd}>
        <div className={classes.head} style={{fontWeight: 500, fontSize: 20}}>{props.header}</div>
        {props.data.map((item, index) => {
            console.log(item)
            return <div key={index} className={classes.item} style={{marginBottom: 10}}>
                <div>{item.main}</div>
                <div>{item.second}</div>
            </div>
        })}
    </div>
}

export default GeneralCrd;