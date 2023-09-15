import React from 'react'
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

import {
  CCard,
  CCardBody,
} from '@coreui/react'




const Dashboard = () => {
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  const datas = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 80, 81, 56],
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.4)",
      },
    ],
  };

  return (
    <>
  
      <CCard className="mb-4">
        <CCardBody>
          <div style={{width: '100%', display: 'flex', gap: 30}}>
            <div style={{width: '30%'}}>
            <Doughnut data={data}/>

            </div>
            <div style={{width: '30%'}}>
            <Doughnut data={datas}/>

            </div>
          </div>
          <br/>
          <br/>

          <div style={{width: '50%'}}>
            <Line data={datas}  />
            </div>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Dashboard
