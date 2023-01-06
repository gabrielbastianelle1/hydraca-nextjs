import { React } from 'react'
import BarGraph from '../graphs/BarGraph'
import LineGraph from '../graphs/LineGraph'
import LineGraphImc from '../graphs/LineGraphImc'
import DoughnutGraph from '../graphs/DoughnutGraph'
import Typewriter from 'typewriter-effect'
import { GirlHome } from '../svgs'
import Title from './Title'

export default function User() {
    return (
        <main className="flex-grow">
            <Title />
            <div className="space-y-24 lg:space-y-0 flex flex-col lg:grid lg:grid-cols-3 lg:grid-rows-2 gap-10 items-center">
                <div className="box-content hidden mt-10 lg:block sm:h-32   sm:w-64 bg-blue-900 rounded-lg justify-self-center self-start">
                    <h1 className="font-semibold text-slate-50 text-justify mt-4 mr-10 ml-2">
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
                <div className="  mr-36 justify-self-center self-start  w-full lg:w-[250px]">
                    <DoughnutGraph />
                </div>

                <div className="justify-self-center self-start w-full lg:w-[350px]">
                    <BarGraph />
                </div>
                <div className=" justify-self-center self-start w-full lg:w-[350px]">
                    <LineGraph />
                </div>
                <div className=" mr-32 justify-self-center self-start w-full lg:w-[350px]">
                    <LineGraphImc />
                </div>

                <GirlHome className=" transform hidden scale-75 md:block absolute -bottom-12 -right-10" />
            </div>
        </main>
    )
}
