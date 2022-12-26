import React from 'react'
import { Bar } from 'react-chartjs-2'
import 'chart.js/auto'
import { useState, useEffect } from 'react'
import { getDataToBarGraph } from './GraphCalcs'

export default function BarGraph() {
    const [data, setData] = useState({
        datasets: []
    })

    useEffect(() => {
        getDataToBarGraph(3)
            .then((response) => {
                setData({
                    labels: response.lastRegisters.map((element) => {
                        return element.date
                    }),
                    datasets: [
                        {
                            label: 'Media Glicose',
                            data: response.lastRegisters.map((element) => {
                                return element.avarageGlucose
                            }),
                            backgroundColor: 'rgba(54, 162, 235, 0.2)'
                        },
                        {
                            label: 'Glicose Ultimo Registo',
                            data: response.lastRegisters.map((element) => {
                                return element.amountGlucose
                            }),
                            backgroundColor: 'rgba(255, 206, 86, 1)'
                        }
                    ]
                })
            })
            .catch((error) => console.log(error))
    }, [])

    return <Bar data={data} height={250} options={{ responsive: true }} />
}
