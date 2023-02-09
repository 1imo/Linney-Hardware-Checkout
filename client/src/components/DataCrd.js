import React from 'react';
import { useState, useEffect } from 'react';
import classes from "./DataCrd.module.css"

function DataCrd(props) {

    const [content, setContent] = useState();
    const [state, setState] = useState(<img src={"check.png"} width="20px" height="20px" />);
    let data = props.content.map((item, index) => { return item })

    
        // if (props.title == "Request Status") {
        //     if (data[0].state != "pending") {
        //         if (data[0].state == "success") {
        //             setState(<img src={"check-check.png"} width="20px" height="20px" />)
        //         } else {
        //             setState(<img src={"cross.png"} width="20px" height="20px" />)
        //         }
        //     }

        //     }
        
    
  

    return <div className={classes.crd}>
        <div className={classes.head}>
            <div>{props.title}</div>
            <button>See More</button>
        </div>
        <div className={classes.subHead}>
            <div>Item</div>
            <div className={classes.subHeadRight}>
                <div>{props.title == "Request Status" ? "Status" : null}</div>
                <div>Qty</div>
                <div>Take Action</div>
            </div>
        </div>

        {props.content.map((item, index) => {
            if (props.title == "Request Status") {
            return <div className={classes.item}>
                <div>{item.name}</div>
                <div className={classes.itemRight}>
                    {state}
                    <div style={{marginLeft: 20, marginRight: 20}}>{item.quantity}</div>
                    <img src={"message-square.svg"} />
                    <img src={"qr-code.svg"} />
                    <img src={"more-vertical.png"} />
                </div>
            </div>  
            }

            if (props.title == "Latest Leases") {
                return <div className={classes.item}>
                <div>{item.name}</div>
                <div className={classes.itemRight}>
                    
                    <div style={{marginLeft: 20, marginRight: 20}}>{item.quantity}</div>
                    <img src={"message-square.svg"} />
                    <img src={"forward.png"} />
                    <img src={"more-vertical.png"} />
                </div>
                </div>  
            }
            
            if (props.title == "Late") {
                return <div className={classes.item}>
                    <div>{item.name}</div>
                    <div className={classes.itemRight}>
                        
                        <div style={{ marginLeft: 20, marginRight: 20 }}>{item.quantity}</div>
                        <img src={"message-square.svg"} />
                        <img src={"forward.png"} />
                        <img src={"more-vertical.png"} />
                    </div>
                </div>
            }
            
        })}
    </div>
}

export default DataCrd;