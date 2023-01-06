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
                                'rgba(152, 189, 255)',
                                'rgba(75, 73, 172)'
                            ],
                            borderColor: [
                                'rgba(152, 189, 255)',
                                'rgba(75, 73, 172)'
                            ],
                            hoverBackgroundColor: ['#8FAEFF', '#0143F3']
                        }
                    ]
                })
            })
            .catch((error) => console.log(error))
    }, [])

    return <Doughnut data={data} height={250} options={{ responsive: true }} />
}
