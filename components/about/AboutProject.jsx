import { useRef } from 'react'
import 'animate.css'
export default function AboutProject() {
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

            <div className="flex justify-center p-10 lg:p-24 grid grid-cols-1 gap-y-10 ">
                <div className="justify-center w-full ">
                    <h1 className="uppercase text-center animate__animated animate__pulse  font-bold text-2xl text-colorButton">
                        Sobre o projeto
                    </h1>
                </div>
                <div className="flex justify-center">
                    <div
                        className=" lg:w-2/5 lg:h-80 lg:grid w-max justify-center items-center rounded-xl border-gray-200  mb-4 bg-blue-100 animate__animated animate__fadeIn"
                        data-wow-duration="1s"
                        data-wow-delay=".1s"
                    >
                        <div className=" lg:p-10 p-5 lg:text-lg font-light text leading-relaxed text-justif align-middle  text-gray-800">
                            <p>
                                <a className="ml-4">O presente trabalho</a> é
                                fruto de uma de investigação tanto conteúdos
                                teóricos quanto práticos, sobre o registo e
                                gestão de Glicose e Insulina, sendo realizado na
                                unidade curricular de Projeto 3.
                            </p>
                            <p>
                                <a className="ml-4"> O trabalho pretende </a>{' '}
                                guardar os registos diários de medição de
                                glicose do utilizador, assim como também,
                                efetuar o calculo de insulina para no fim
                                sugerir a quantidade que o utilizador deve
                                tomar.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
