import React from 'react';
import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import UserContext from '../../str/UserContext';
import classes from "./Dashboard.module.css";
import classesGlob from "../../Global.module.css";
import MainInfoCrd from '../../components/MainInfoCrd';
import GraphCrd from '../../components/GraphCrd';
import PickUpCrd from '../../components/PickUpCrd';
import DataCrd from '../../components/DataCrd';
import axios from 'axios';
import DevContext from '../../str/DevContext';


function Dashboard() {
    const navigate = useNavigate();

    const UserCtx = useContext(UserContext);
    const DevCtx = useContext(DevContext);

    useEffect(() => {
        if (!UserCtx.user) {
            navigate("/login")
        } else {
            console.log(UserCtx.userDetails)
            
            getIp()
        }
    }, [])

    const getIp = async () => {
        const res = await axios.get("https://api.ipify.org/?format=json")
        axios.post(`${DevCtx.ip}/ip`, {
            ip: res.data,
            uid: UserCtx.user.uid
        })
    }

    
    return <div className={classesGlob.page}>
        <Header />

        <div style={{ marginTop: 40, display: "flex", flexDirection: "column", rowGap: 20}}>
            <div className={classes.section}>
                <MainInfoCrd />
                <GraphCrd cats={[["#18A0FB", "Taken out on loan", [5, 2, 5, 2]], ["#DA2F1D", "Late", [1, 4, 5, 2]]]} />
            </div>
            <PickUpCrd />

            <div className={classes.section}>
                <DataCrd title="Request Status" content={[{ name: "test", state: "pending", quantity: 7 }, { name: "test", state: "pending", quantity: 7 }, { name: "test", state: "pending", quantity: 7 }]} />
                <GraphCrd cats={[["#16B467", "Approved", [1, 5, 6]],["#FFC702", "Processing", [1, 4, 6, 7]],["#DA2F1D", "Late", [0, 1, 0, 2]]]} />
            </div>

            <div className={classes.section}>
                <DataCrd title="Late" content={[{ name: "test", quantity: 7 }, { name: "test", quantity: 7 }, { name: "test", quantity: 7 }]} />
                <GraphCrd cats={[["#DA2F1D", "Late", [1, 1, 0, 6, 0, 1, 0]]]} />
            </div>

            <div className={classes.section}>
                <DataCrd title="Latest Leases" content={[{ name: "test", quantity: 7 }, { name: "test", quantity: 7 }, { name: "test", quantity: 7 }]} />
                <GraphCrd cats={[["#16B467", "Approved", [1, 5, 6]],["#FFC702", "Processing", [1, 4, 6, 7]],["#DA2F1D", "Late", [0, 1, 0, 2]]]} />
            </div>

            
        </div>
    </div>
}

export default Dashboard;