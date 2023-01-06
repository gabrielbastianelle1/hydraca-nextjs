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
                                'rgba(255, 115, 93, 1)',
                                'rgba(124, 193, 122, 1)'
                            ],
                            borderColor: [
                                'rgba(255, 115, 93, 1)',
                                'rgba(124, 193, 122, 1)'
                            ],
                            hoverBackgroundColor: ['#FF9C8C', '#A4FFA3']
                        }
                    ]
                })
            })
            .catch((error) => console.log(error))
    }, [])

    return <Doughnut data={data} height={250} options={{ responsive: true }} />
}
