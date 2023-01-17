import { useRef } from 'react'
import 'animate.css'
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

            <div className="justify-center p-24 ">
                <div className="square justify-center w-full ">
                    <h1 className="uppercase text-center animate__animated animate__pulse  font-bold text-2xl text-colorButton">
                        Contato
                    </h1>
                </div>
            </div>
            <div className="grid grid-cols-2  flex justify-center">
                <div className="flex justify-center ml-10">
                    <div
                        className=" lg:h-80 lg:w-10/12   border border-blue-200  mb-6 bg-blue-100 animate__animated animate__backInLeft"
                        data-wow-duration="1s"
                        data-wow-delay=".1s"
                    >
                        <h1 className=" font-semibold text-slate-50">
                            kºlkmlç
                        </h1>
                    </div>
                </div>
                <div className="flex justify-center mr-10">
                    <div
                        className="  lg:h-80 lg:w-10/12 border  border-blue-200  mb-6 bg-blue-100 animate__animated animate__backInRight"
                        data-wow-duration="1s"
                        data-wow-delay=".1s"
                    ></div>
                </div>
            </div>
        </main>
    )
}
