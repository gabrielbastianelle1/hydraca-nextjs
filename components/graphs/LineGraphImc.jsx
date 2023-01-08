import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import 'chart.js/auto'
import { useState, useEffect } from 'react'
import { getDataToDoughnutGraph } from './GraphCalcs'

export default function LineGraphImc() {
    const [data, setData] = useState({
        datasets: []
    })

    useEffect(() => {
        getDataToDoughnutGraph()
            .then((response) => {
                setData({
                    labels: ['imc'],
                    datasets: [
                        {
                            data: [response.imc],
                            backgroundColor: ['rgba(255, 115, 93, 1)'],
                            borderColor: ['rgba(255, 115, 93, 1)'],
                            hoverBackgroundColor: ['#FF9C8C']
                        }
                    ]
                })
            })
            .catch((error) => console.log(error))
    }, [])

    return <Doughnut data={data} height={250} options={{ responsive: true }} />
}
