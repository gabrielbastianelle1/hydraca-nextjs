import { useRef } from 'react'
import 'animate.css'
import { Question, Geral, Bugs, Suport } from '../svgs'

export default function Contact() {
    const h2 = useRef(null)
    return (
        <main>
            {/**     <div classNameName="flex h-screen justify-center p-24 ">
                <div classNameName="square">
                    <h1 className="uppercase text-center animate__animated animate__pulse  font-bold text-2xl text-colorButton">
                        Sobre o projeto
                    </h1>
                </div>
            </div>
                 *
                 */}

            <div className="justify-center p-9 lg:p-20 ">
                <div className="square justify-center w-full ">
                    <h1 className="uppercase text-center animate__animated animate__pulse  font-bold text-2xl text-colorButton">
                        Contato
                    </h1>
                </div>
            </div>
            <div className="grid grid-cols-1  flex justify-center">
                <div className="flex justify-center">
                    <div
                        className="  lg:h-80 lg:w-3/6 rounded-xl  h-30 w-30  lg:mb-6 bg-gray-100/50 animate__animated animate__backInDown"
                        data-wow-duration="1s"
                        data-wow-delay=".1s"
                    >
                        <div className="container my-9 lg:my-20 lg:px-6 lg:mx-44">
                            <div className="flex justify-center">
                                <div className="flex justify-items-center">
                                    <div className="grow-0 shrink-0 basis-auto w-full lg:w-7/12">
                                        <div className="flex flex-wrap">
                                            <div className="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
                                                <div className="flex items-start">
                                                    <div className="shrink-0">
                                                        <div className="p-4 bg-blue-900 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                                                            <Suport />
                                                        </div>
                                                    </div>
                                                    <div className="grow ml-6">
                                                        <p className="font-bold mb-1">
                                                            Suporte Técnico
                                                        </p>
                                                        <p className="text-gray-500">
                                                            suport@example.com
                                                        </p>
                                                        <p className="text-gray-500">
                                                            99999999
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
                                                <div className="flex items-start">
                                                    <div className="shrink-0">
                                                        <div className="p-4 bg-blue-900 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                                                            <Question />
                                                        </div>
                                                    </div>
                                                    <div className="grow ml-6">
                                                        <p className="font-bold mb-1">
                                                            Dúvidas
                                                        </p>
                                                        <p className="text-gray-500">
                                                            duvida@example.com
                                                        </p>
                                                        <p className="text-gray-500">
                                                            99988
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
                                                <div className="flex align-start">
                                                    <div className="shrink-0">
                                                        <div className="p-4 bg-blue-900 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                                                            <Geral />
                                                        </div>
                                                    </div>
                                                    <div className="grow ml-6">
                                                        <p className="font-bold mb-1">
                                                            Geral
                                                        </p>
                                                        <p className="text-gray-500">
                                                            geral@example.com
                                                        </p>
                                                        <p className="text-gray-500">
                                                            9999
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
                                                <div className="flex align-start">
                                                    <div className="shrink-0">
                                                        <div className="p-4 bg-blue-900 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                                                            <Bugs />
                                                        </div>
                                                    </div>
                                                    <div className="grow ml-6">
                                                        <p className="font-bold mb-1">
                                                            Reportar bugs
                                                        </p>
                                                        <p className="text-gray-500">
                                                            bugs@example.com
                                                        </p>
                                                        <p className="text-gray-500">
                                                            88788
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
