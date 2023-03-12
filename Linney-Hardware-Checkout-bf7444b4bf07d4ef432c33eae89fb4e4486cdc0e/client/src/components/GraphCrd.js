import React from "react";
import { Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend, } from 'chart.js';
import { Line } from 'react-chartjs-2';
import classes from "./GraphCrd.module.css";
import Chart from "react-apexcharts";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

function GraphCrd(props) {
    const labels = ["", "", ""];
    

    // let options = {
    //         responsive: true,
    //         plugins: {
    //             legend: {
    //                 display: false,
    //                 position: 'top'
    //           },
    //           title: {
    //             display: false,
    //             text: 'Chart.js Line Chart',
    //             },
                
               
    //     },
    //     scales: {
            
    //         x: {
    //           grid: {
    //             display: false,
    //             borderWidth: 0,
    //             backgroundColor: "#fff"
    //             },
                
    //         },
            
    //         y: {
    //           grid: {
    //                 display: false,
    //                 borderWidth: 0,
    //                 backgroundColor: "#fff"
                  
    //             },
    //             ticks: {
    //                 display: false
    //             }
    //         },
            
            
    //       }
    // };

    let data = {
        options: {
            chart: {
                id: "line",
                toolbar: {
                    show: false
                },
                title: {
                    show: false
                },
                foreColor: '#ffffff'
                
                
            },
            
            
            legend: {
                show: false
            },
            xaxis: {
                categories: ["", "", "", "", "", "", "", "", ""],
            },
            stroke: {
                curve: 'smooth',
                width: 2,
            },
            
            grid: {
                xaxis: {
                    show: false,
                    lines: {
                        show: false
                    },
                    style: {
                       
                        fontSize: '0px',
                        
                        fontWeight: 400,
                        cssClass: 'labels',
                        color: '#fff',

                    }
                },   
                yaxis: {
                    show: false,
                    lines: {
                        show: false
                    },
                    style: {
                        // colors: '#fff',
                        fontSize: '0px',
                        
                        fontWeight: 400,
                        cssClass: 'labels',
                        colors: ['#F44336', '#E91E63', '#9C27B0']
                    },

                    
                    
                    
                },
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
                
            }
        },
        series: [
        ]
    }

    data.series = props.cats.map((item, index) => {
        return {
            name: item[1],
            data: item[2],
            color: item[0]
        }
    })

    
    

    return <div className={classes.crd}>
        <div className={classes.overlay}>
            <div>
                {props.cats.map((data, index) => {
                    return <div className={classes.cat}>
                        <div key={index} style={{ backgroundColor: data[0] }} className={classes.color}>&nbsp;</div>
                        <div>{data[1]}</div>
                    </div> 
                })}
            </div>
            <div className={classes.switch}>
                <div>Week</div>
                <div>Month</div>
                <div>Year</div>
            </div>
        </div>

        <div className={classes.graph}>
            {/* <Line options={options} data={data}  />
             */}
            
             <Chart
                options={data.options}
                series={data.series}
                type="line"
                width="100%"
                height={"100%"}
  />

        </div>

    </div>
}
export default GraphCrd;