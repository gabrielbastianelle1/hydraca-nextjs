import React from 'react'
import { Line } from 'react-chartjs-2'
import 'chart.js/auto'
import { useState, useEffect } from 'react'
import { getDataToBarGraph } from './GraphCalcs'

export default function LineGraphImc() {
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
                            label: 'Imc:',
                            data: response.lastRegisters.map((element) => {
                                return element.imc
                            }),
                            backgroundColor: 'rgba(54, 162, 235, 0.2)',
                            borderColor: 'rgb(53, 162, 235)'
                        }
                    ]
                })
            })
            .catch((error) => console.log(error))
    }, [])

    return <Line data={data} height={250} options={{ responsive: true }} />
}
