"use client"

import React from "react"
import { createContext, useState } from "react"

const UserCtx = createContext({})


export  function UserCtxHandler(props) {
    const [email, setEmail] = useState("")

    const Context = {
        email: email,
        setEmail, setEmail,
    }

    return <UserCtx.Provider value={Context}>
        {props.children}
    </UserCtx.Provider>
}

export default UserCtx