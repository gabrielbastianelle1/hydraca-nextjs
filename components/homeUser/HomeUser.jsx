import { React } from 'react'
import BarGraph from '../graphs/BarGraph'
import LineGraph from '../graphs/LineGraph'
import LineGraphImc from '../graphs/LineGraphImc'
import HorizontalGraph from '../graphs/HorizontalGraph'
import DoughnutGraph from '../graphs/DoughnutGraph'
import Typewriter from 'typewriter-effect'
import { GirlHome } from '../svgs'
import Title from './Title'
import 'animate.css'
import { useState, useEffect } from 'react'
import { getCurrentUser } from '../../services/service.auth'

export default function User() {
    const [user, setUser] = useState({})

    useEffect(() => {
        getCurrentUser()
            .then((response) => setUser(response.data.user))
            .catch((error) => console.log(error))
    }, [])

    return (
        <main className="flex-grow">
            <Title />
            <div className="flex flex-col gap-y-16 lg:gap-y-0 lg:grid items-center justify-center lg:grid-cols-3 lg:grid-rows-2">
                <div className="lg:grid items-center justify-center  hidden h-32  w-64 bg-blue-900 rounded-lg justify-self-center animate__animated animate__flipInX animate__delay-1s">
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

                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div className="lg:grid items-center justify-center h-28  w-64 bg-blue-900  rounded-lg justify-self-center animate__animated animate__flipInY animate__delay-1s">
                        <h1 className="   px-14 py-10 lg:p-5 font-semibold text-slate-50 ">
                            O seu IMC: {user.imc}
                        </h1>
                    </div>
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

                <GirlHome className=" transform hidden scale-75 lg:block absolute -bottom-12 -right-10 animate__animated animate__bounceIn " />
            </div>
        </main>
    )
}
