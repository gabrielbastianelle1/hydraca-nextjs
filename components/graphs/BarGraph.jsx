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
                            label: 'Média Glicose',
                            data: response.lastRegisters.map((element) => {
                                return element.avarageGlucose
                            }),
                            backgroundColor: 'rgba(152, 189, 255)'
                        },
                        {
                            label: 'Glicose Ultimo Registo',
                            data: response.lastRegisters.map((element) => {
                                return element.amountGlucose
                            }),
                            backgroundColor: 'rgba(75, 73, 172)'
                        }
                    ]
                })
            })
            .catch((error) => console.log(error))
    }, [])

    return <Bar data={data} height={250} options={{ responsive: true }} />
}
