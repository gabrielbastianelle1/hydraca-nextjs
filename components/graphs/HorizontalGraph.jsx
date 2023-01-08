import React from 'react'
import { Line } from 'react-chartjs-2'
import 'chart.js/auto'
import { useState, useEffect } from 'react'
import { getDataToHorizontalGraph } from './GraphCalcs'
import { Utils } from './utils'

export default function HorizontalGraph() {
    const [data, setData] = useState({
        datasets: []
    })

    useEffect(() => {
        getDataToHorizontalGraph(7)
            .then((response) => {
                setData({
                    labels: Utils.months({ count: 7 }),
                    datasets: [
                        {
                            axis: 'y',
                            label: 'Imc',
                            data: [response.imc],
                            fill: false,
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(255, 159, 64, 0.2)',
                                'rgba(255, 205, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(201, 203, 207, 0.2)'
                            ],
                            borderColor: [
                                'rgb(255, 99, 132)',
                                'rgb(255, 159, 64)',
                                'rgb(255, 205, 86)',
                                'rgb(75, 192, 192)',
                                'rgb(54, 162, 235)',
                                'rgb(153, 102, 255)',
                                'rgb(201, 203, 207)'
                            ],
                            borderWidth: 1
                        }
                    ]
                })
            })
            .catch((error) => console.log(error))
    }, [])

    return <Line data={data} height={250} options={{ responsive: true }} />
}
