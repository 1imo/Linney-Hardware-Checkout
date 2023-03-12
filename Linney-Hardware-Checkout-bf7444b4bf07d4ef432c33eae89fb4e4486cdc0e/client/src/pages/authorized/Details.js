import { joinPaths } from "@remix-run/router";
import React from "react";
import { useState, useRef, useContext } from "react";
import classes from "../unauthorized/Login.module.css"
import axios from "axios";
import DevContext from "../../str/DevContext";
import UserContext from "../../str/UserContext";
import { useNavigate } from "react-router-dom";


function Details() {

    const orgCode = useRef();
    const orgName = useRef();
    const navigate = useNavigate();

    const [inputs, setInputs] = useState(0)
    const [verifyPosition, setVerifyPosition] = useState(0)
    const [orgNameExists, setOrgNameExists] = useState("")

    const DevCtx = useContext(DevContext)
    const UserCtx = useContext(UserContext)

const verify = [
        <div></div>,
        <div className={classes.check}>
            <div className={classes.checkHead}>Is this the one?</div>
            <div className={classes.checkData}>{orgNameExists}</div>
        </div>
]
    
    const content = [
        <div className={classes.inputs}>
            <div>
                <label>Organisation Code:</label>
                <input type="text" ref={orgCode} />
            </div>
            <button className={classes.ctaBtn} onClick={() => join()}>
                    Continue
            </button>
        </div>,
        <div className={classes.inputs}>
            <div>
                <label>Organisation Name:</label>
                <input type="text" ref={orgName} />
            </div>
            <button className={classes.ctaBtn} onClick={() => create()}>
                Continue
            </button>
        </div>
    ]

    

    const [positioning, setPositioning] = useState({transform: "translate(-50%, 5px)"})

    const changeEntrance = (position) => {
        if (position === 1) {
            setInputs(1)
            setPositioning({
                transform: "translate(50%, 5px)",
                borderRadius: "0 20px 20px 0",
                transition: "all 0.3s ease-in-out"
            })
            setVerifyPosition(0)
        } else {
            setInputs(0)
            setPositioning({
                transform: "translate(-50%, 5px)",
                borderRadius: "20px 0 0 20px",
                transition: "all 0.3s ease-in-out"
            })


        }
    }

    const join = async () => {
        if (verifyPosition === 0) {
            const res = await axios.post(`${DevCtx.ip}/codeCheck`, {
                code: orgCode.current.value,
                uid: UserCtx.user.uid
            })

            console.log(res.data)

            if (res) {
                setOrgNameExists(res.data)
                setVerifyPosition(1)
            }   
        } else {
            axios.post(`${DevCtx.ip}/addToGroup`, {
                code: orgCode.current.value,
                uid: UserCtx.user.uid
            }).then(() => {
                UserCtx.setUserOrg(orgNameExists)
                navigate("/dashboard")
            })
        }

        
        
    }

    const create = async () => {
        const res = await axios.post(`${DevCtx.ip}/createOrganisation`, {
            name: orgName.current.value,
            uid: UserCtx.user.uid
        })

        if (res) {
            navigate("/dashboard")
        }
    }

    return <div className={classes.page}>
    <div className={classes.content}>
        <div className={classes.headerEntire}>
            <div className={classes.header}>
            <div className={classes.headerHeading} onClick={() => changeEntrance(0)}>
                    Join
                </div>
                <div className={classes.headerHeading} onClick={() => changeEntrance(1)}>
                    Create
                </div> 
            </div>
            
            <div className={classes.line} style={positioning}>&nbsp;</div>
        </div>
        {verify[verifyPosition]}

        <div>
            {content[inputs]}
            </div>
        </div>
        </div>
}

export default Details;