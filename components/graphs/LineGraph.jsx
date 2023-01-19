import React from 'react'
import { Line } from 'react-chartjs-2'
import 'chart.js/auto'
import { useState, useEffect } from 'react'
import { getDataToBarGraph } from './GraphCalcs'
import { Chart } from 'chart.js'

export default function LineGraph() {
    const [data, setData] = useState({
        datasets: []
    })

    useEffect(() => {
        getDataToBarGraph(7)
            .then((response) => {
                setData({
                    labels: ['1', '2', '3', '4', '5', '6', '7'],
                    datasets: [
                        {
                            label: 'Média Glicose nos ultimos 7 registos:',
                            data: response.lastRegisters.map((element) => {
                                return element.avarageGlucose
                            }),
                            backgroundColor: 'rgba(243, 121, 126, 1)',
                            borderColor: 'rgba(243, 121, 126, 1)'
                        }
                    ]
                })
            })
            .catch((error) => console.log(error))
    }, [])

    return <Line data={data} height={250} options={{ responsive: true }} />
}
