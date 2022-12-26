import { React } from 'react'
import BarGraph from '../graphs/BarGraph'
import LineGraph from '../graphs/LineGraph'
import DoughnutGraph from '../graphs/DoughnutGraph'
import Title from './Title'

export default function User() {
    return (
        <main className="flex-grow">
            <Title />
            <div className="space-y-24 lg:space-y-0 flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-2 gap-20 items-center">
                <div className="justify-self-center self-start  w-full lg:w-[250px]">
                    <DoughnutGraph />
                </div>
                <div className="box-content hidden lg:block sm:h-32   sm:w-60 bg-blue-900 rounded-lg justify-self-center self-start">
                    <h1 className="font-semibold text-slate-50 mt-4 mr-10 ml-2">
                        Não se esqueaça de registar os dados da glicose de hoje!
                    </h1>
                </div>
                <div className="justify-self-center self-start w-full lg:w-[350px]">
                    <BarGraph />
                </div>
                <div className="justify-self-center self-start w-full lg:w-[350px]">
                    <LineGraph />
                </div>
            </div>
        </main>
    )
}
