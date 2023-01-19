import { useRef } from 'react'
import 'animate.css'
import { Question, Geral, Bugs, Suport } from '../svgs'

export default function Contact() {
    const h2 = useRef(null)
    return (
        <main>
            {/**     <div className="flex h-screen justify-center p-24 ">
                <div className="square">
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
                        <div class="container my-9 lg:my-20 lg:px-6 lg:mx-44">
                            <div class="flex justify-center">
                                <div class="flex justify-items-center">
                                    <div class="grow-0 shrink-0 basis-auto w-full lg:w-7/12">
                                        <div class="flex flex-wrap">
                                            <div class="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
                                                <div class="flex items-start">
                                                    <div class="shrink-0">
                                                        <div class="p-4 bg-blue-900 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                                                            <Suport />
                                                        </div>
                                                    </div>
                                                    <div class="grow ml-6">
                                                        <p class="font-bold mb-1">
                                                            Suporte Técnico
                                                        </p>
                                                        <p class="text-gray-500">
                                                            suport@example.com
                                                        </p>
                                                        <p class="text-gray-500">
                                                            99999999
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
                                                <div class="flex items-start">
                                                    <div class="shrink-0">
                                                        <div class="p-4 bg-blue-900 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                                                            <Question />
                                                        </div>
                                                    </div>
                                                    <div class="grow ml-6">
                                                        <p class="font-bold mb-1">
                                                            Dúvidas
                                                        </p>
                                                        <p class="text-gray-500">
                                                            duvida@example.com
                                                        </p>
                                                        <p class="text-gray-500">
                                                            99988
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
                                                <div class="flex align-start">
                                                    <div class="shrink-0">
                                                        <div class="p-4 bg-blue-900 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                                                            <Geral />
                                                        </div>
                                                    </div>
                                                    <div class="grow ml-6">
                                                        <p class="font-bold mb-1">
                                                            Geral
                                                        </p>
                                                        <p class="text-gray-500">
                                                            geral@example.com
                                                        </p>
                                                        <p class="text-gray-500">
                                                            9999
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
                                                <div class="flex align-start">
                                                    <div class="shrink-0">
                                                        <div class="p-4 bg-blue-900 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                                                            <Bugs />
                                                        </div>
                                                    </div>
                                                    <div class="grow ml-6">
                                                        <p class="font-bold mb-1">
                                                            Reportar bugs
                                                        </p>
                                                        <p class="text-gray-500">
                                                            bugs@example.com
                                                        </p>
                                                        <p class="text-gray-500">
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
