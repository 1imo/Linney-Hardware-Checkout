import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    BarElement
} from "chart.js"

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    BarElement

)

import { Bar } from "react-chartjs-2"
import classes from "./Crd.module.css"

export default function ChartCrd(props) {

    const data = {
        labels: [
            "January",
            "February",
            "March",
            "April"
        ],
        datasets: [
            {
                label: "One",
                borderRadius: 5,
                data: [0.1, 0, 0.5, 1, 2, 0.2],
                barThickness: 40,
                backgroundColor: "#A2D729"

            },
            {
                label: "Two",
                borderRadius: 5,
                data: [0.4, 0.3, 0.1, 1, 0, 0.3],
                barThickness: 40,
                backgroundColor: "#DF2935"
            }
        ]
    }

    const options = {
        plugins: {
            legend: {
                display: false,
                position: "bottom",
                align: "middle",
                labels: {
                    boxWidth: 20,
                    usePointStyle: true,
                    pointStyle: "circle"
                },
                title: {
                    display: false
                }
            },
            
        },
        scales: {
            
            x: {
                stacked: true,
                display: false
              },
              y: {
                stacked: true,
                display: false
                  
              }
        },
        
        
    }




    return <div className={classes.crd} style={{width: props.width, height: props.height}}>
        <Bar data={data} height={props.height} options={options} />
    </div>
}