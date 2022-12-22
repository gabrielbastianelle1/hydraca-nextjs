import { React } from 'react'
import Bar from '../graphs/Bar'
import Chart from '../graphs/Chart'
import Pie from '../graphs/Pie'
import Title from './Title'

export default function User() {
    return (
        <main className="flex-grow">
            <Title />
            <div className="space-y-24 lg:space-y-0 flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-2 gap-x-20 items-center">
                <div className="box-content hidden lg:block sm:h-32   sm:w-60 bg-blue-900 rounded-lg justify-self-center">
                    <h1 className="font-semibold text-slate-50 mt-4 mr-10 ml-2">
                        Não se esqueaça de registar os dados da glicose de hoje!
                    </h1>
                </div>
                <div>
                    <Pie />
                </div>
                <div className="">
                    <Bar />
                </div>
                <div className="">
                    {/* <img
                        className="hidden w-72 lg:block absolute bottom-0 right-0"
                        src="/images/4435922.jpg"
                    /> */}
                    <Chart />
                </div>
            </div>
        </main>
    )
}
