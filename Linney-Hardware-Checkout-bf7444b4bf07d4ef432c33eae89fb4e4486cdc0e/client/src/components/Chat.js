import React from "react";
import { useContext, useEffect, useState } from "react";
import UserContext from "../str/UserContext";
import classes from "./Chat.module.css"


function Chat(props) {

    const UserCtx = useContext(UserContext)
    const [messages, setMessages] = useState([])

    useEffect(() => {
        props.messages.map((item) => {
            if (item.uid != UserCtx.user.uid) {
                setMessages([...messages, { details: item, state: "received" }])
            }

            if (item.uid == UserCtx.user.uid) {
                setMessages([...messages, { details: item, state: "sent" }])
            }
        })
    }, [])

    return <div className={classes.section}>
        <div className={classes.messagesList}>
            {
                messages.map((item, index) => {
                console.log(item)

                    if (item.state === "sent") {
                        return <div className={classes.sent} key={index}>
                            <div>
                                <div>{item.details.name}</div>
                                <div>{item.details.time}</div>
                            </div>
                            <div>
                                {item.details.content}
                            </div>
                        </div>
                    }

                    if (item.state === "received") {
                        return <div className={classes.received} key={index}>
                            <div>
                                <div>{item.details.name}</div>
                                <div>{item.details.time}</div>
                            </div>
                            <div>
                                {item.details.content}
                            </div>
                        </div>
                    }
                })
            }
        </div>
        {UserCtx.user ? UserCtx.user.admin ? <input type="text" /> : null : null}
    </div>
}

export default Chat