import React from 'react'
import { Line } from 'react-chartjs-2'
import 'chart.js/auto'

const data = {
    labels: ['Bolus', 'Basal'],
    datasets: [
        {
            data: [100, 10],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
            hoverBackgroundColor: ['#36A2EB', '#FFCE56']
        }
    ]
}

export default () => (
    <Line
        data={data}
        width={350}
        height={350}
        options={{ maintainAspectRatio: false }}
    />
)
