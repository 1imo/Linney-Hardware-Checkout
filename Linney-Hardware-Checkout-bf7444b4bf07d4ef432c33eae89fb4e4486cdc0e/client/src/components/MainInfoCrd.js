import React from 'react';
import classes from "./Crd.module.css";
import { useContext } from 'react';
import UserContext from '../str/UserContext';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function MainInfoCrd() {

    

    const UserCtx = useContext(UserContext);
    
    return <div className={classes.card}>
        <div className={classes.infoGraphic}>
            <Doughnut data={{
                datasets: [{
                    // label: ["On Loan", "late", "Soon"],
                    data: [1, 2, 5],
                    backgroundColor: ["#DA2F1D", "#FFC702", "#16B467",],
                    borderColor: [
                        "#fff"
                    ],
                    borderWidth: 0,
                    borderRadius: 200,
                    spacing: 0,
                    rotation: 0,
                    cutout: "80%",
                    margin: 0,
                    padding: 0,
                    left: 0
                }],
            }
                
            } style={{ backgroundColor: "#fff", padding: "0px", margin: "0px", display: "flex", alignItems: "center", justifyContent: "center" }} />
        </div>
        <div className={classes.detailsLrg}>
            <div className={classes.dataSec}>
                <div className={classes.dataNum}>0</div>
                <div className={classes.subHeading}>On Loan</div>
            </div>
            <div className={classes.dataSec}>
                <div className={classes.dataNum}>0</div>
                <div className={classes.subHeading}>Late</div>
            </div><div className={classes.dataSec}>
                <div className={classes.dataNum}>0</div>       
                <div className={classes.subHeading}>Soon</div>
            </div>
        </div>
    </div>
}

export default MainInfoCrd;