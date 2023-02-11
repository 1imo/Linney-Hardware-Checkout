import React from 'react';
import Header from '../../components/Header';
import classMain from "./Dashboard.module.css";
import classesGlob from "../../Global.module.css";
import GeneralCrd from '../../components/GeneralCrd';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../../str/UserContext';
import axios from 'axios';
import DevContext from '../../str/DevContext';
import { useNavigate, useLocation } from 'react-router-dom';
import Chat from '../../components/Chat';
import classes from "./Org.module.css"

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
            
            async function fetchData() {
                const res = await axios.post(`${DevCtx.ip}/getOrgData`, {
                    admin: UserCtx.userDetails ? UserCtx.userDetails.admin ? true : false : false,
                    uid: UserCtx.userDetails ? UserCtx.user.uid : false,
                    code: UserCtx.userDetails ? UserCtx.userDetails.code : false
                });
                if (res.data != false) {
                    console.log(res.data)
                    let list = []
                    res.data.admins.map(item => {
                        let obj = {
                            main: "",
                            second: "",
                        }
                        obj.main = item.user.name
                        obj.second = "Admin"
                        list.push(obj)
                    })
                    res.data.users.map(item => {
                        let obj = {
                            main: "",
                            second: "",
                        }
                        obj.main = item.user.name
                        obj.second = "Member"
                        list.push(obj)
                    })
                    setMembers(list)
                    console.log(list)
                }
                

            }

            fetchData();
        }

    }, []);



    
    return (
        <div className={classesGlob.page}>
            <Header />
            

            <div className={classes.section}>
                <div className={classes.left}>
                    <div>
                        <GeneralCrd header={"Organisation Details"}
                            data={[{ main: "Name:", second: UserCtx.userDetails ? UserCtx.userDetails.company : null },
                            { main: "State:", second: UserCtx.userDetails ? UserCtx.userDetails.admin ? "Admin" : "Member" : null},
                            {main: "Join Code", second: UserCtx.userDetails? UserCtx.userDetails.code : null},
                            ]} />
                    </div>

                    <div>
                        <GeneralCrd header={`Members of ${UserCtx.userDetails ? UserCtx.userDetails.company : null}`} data={members} />
                    </div>
                </div>

                <div className={classes.right}>
                    <Chat messages={[{uid: "1", name: "not me", content: "Hi", time: "now"}]} />

                </div>
            </div>
        </div>
    );
}

export default Org;