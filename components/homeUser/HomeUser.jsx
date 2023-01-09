import { React } from 'react'
import BarGraph from '../graphs/BarGraph'
import LineGraph from '../graphs/LineGraph'
import LineGraphImc from '../graphs/LineGraphImc'
import HorizontalGraph from '../graphs/HorizontalGraph'
import DoughnutGraph from '../graphs/DoughnutGraph'
import Typewriter from 'typewriter-effect'
import { GirlHome } from '../svgs'
import Title from './Title'

export default function User() {
    return (
        <main className="flex-grow">
            <Title />
            <div className="flex flex-col gap-y-16 lg:gap-y-0 lg:grid items-center justify-center lg:grid-cols-3 lg:grid-rows-2">
                <div className="lg:grid items-center justify-center  hidden h-32  w-64 bg-blue-900 rounded-lg justify-self-center">
                    <h1 className="p-4 font-semibold text-slate-50">
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString(
                                        '       Não se esqueça de registar os dados da glicose de hoje!'
                                    )
                                    .callFunction(() => {
                                        console.log('String typed out!')
                                    })
                                    .pauseFor(2500)

                                    .start()
                            }}
                        />
                    </h1>
                </div>
                <div className="justify-self-center lg:w-3/4 lg:max-w-[350px]">
                    <DoughnutGraph />
                </div>

                <div className="justify-self-center lg:w-3/4 lg:max-w-[350px]">
                    <BarGraph />
                </div>
                <div className=" justify-self-center lg:w-3/4 lg:max-w-[350px]">
                    <LineGraph />
                </div>
                <div className=" mr-32 justify-self-center lg:w-3/4 lg:max-w-[350px]">
                    <HorizontalGraph />
                </div>
                <GirlHome className=" transform hidden scale-75 lg:block absolute -bottom-12 -right-10" />
            </div>
        </main>
    )
}
