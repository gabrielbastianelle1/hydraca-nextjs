import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import 'chart.js/auto'
import { useState, useEffect } from 'react'
import { getDataToDoughnutGraph } from './GraphCalcs'

export default function DoughnutGraph() {
    const [data, setData] = useState({
        datasets: []
    })

    useEffect(() => {
        getDataToDoughnutGraph()
            .then((response) => {
                setData({
                    labels: ['Bolus', 'Basal'],
                    datasets: [
                        {
                            data: [response.totalBolus, response.totalBasal],
                            backgroundColor: [
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)'
                            ],
                            borderColor: [
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)'
                            ],
                            hoverBackgroundColor: ['#36A2EB', '#FFCE56']
                        }
                    ]
                })
            })
            .catch((error) => console.log(error))
    }, [])

    return <Doughnut data={data} height={250} options={{ responsive: true }} />
}
