import React from "react";
import { createContext } from "react";

const DevContext = createContext({})

export function DevContextHandler(props) {

    const Context = {
        ip: "http://172.20.10.4:8080"
    }

    return <DevContext.Provider value={Context}>
        {props.children}
    </DevContext.Provider>

}

export default DevContext