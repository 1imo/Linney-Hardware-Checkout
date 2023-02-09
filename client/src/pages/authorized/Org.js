import React from 'react';
import Header from '../../components/Header';
import classes from "./Dashboard.module.css";
import classesGlob from "../../Global.module.css";
import GeneralCrd from '../../components/GeneralCrd';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../../str/UserContext';
import axios from 'axios';
import DevContext from '../../str/DevContext';
import { useNavigate, useLocation } from 'react-router-dom';

function Org() {
    const UserCtx = useContext(UserContext);
    const DevCtx = useContext(DevContext);
    const [members, setMembers] = useState([]);
    const [notices, setNotices] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();


    useEffect( () => {
        if (!UserCtx.user) {
            navigate("/login", {
                state:
                    { referredFrom: location.pathname }
            })
        } else {
            console.log(UserCtx.user)
            async function fetchData() {
                const res = await axios.post(`${DevCtx.ip}/getOrgData`, {
                    company: UserCtx.userDetails ? UserCtx.userDetails.company : null
                });
                console.log(res)

            }

            fetchData();
        }

    }, []);



    
    return (
        <div className={classesGlob.page}>
            <Header />
            

            <div>
                <div>
                    <div>
                        <GeneralCrd header={"Organisation Details"}
                            data={[{ main: "Name:", second: UserCtx.userDetails ? UserCtx.userDetails.company : null },
                            { main: "State:", second: UserCtx.userDetails ? UserCtx.userDetails.admin ? "Admin" : "Member" : null}]} />
                    </div>

                    <div>
                        <GeneralCrd header={`Members of ${UserCtx.userDetails ? UserCtx.userDetails.company : null}`} data={[{}]} />
                    </div>
                </div>

                <div>

                </div>
            </div>
        </div>
    );
}

export default Org;