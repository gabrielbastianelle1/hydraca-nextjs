import { useRef } from 'react'

export default function AboutProject() {
    const h2 = useRef(null)
    return (
        <main>
            <div className="flex h-screen justify-center items-center ">
                <div className="square">
                    <h1 className="uppercase text-center   font-bold text-2xl text-colorButton">
                        Sobre o projeto
                    </h1>
                </div>
            </div>
        </main>
    )
}
