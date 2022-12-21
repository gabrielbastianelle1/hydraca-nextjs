import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import SplitType from 'split-type'

export default function Welcome() {
    const h1 = useRef(null)

    useEffect(() => {
        new SplitType(h1.current)
        gsap.to('.char', {
            delay: 2.5,
            y: 0,
            stagger: 0.05
        })

        gsap.to('.p-gsap', {
            delay: 0.5,
            opacity: 1,
            stagger: 1
        })
    })

    return (
        <main className="flex flex-col px-10 items-center justify-start">
            <h1
                ref={h1}
                className="uppercase  text-center font-bold text-4xl md:text-5xl lg:text-7xl text-colorButton overflow-hidden mb-8"
            >
                bem vindo a hydraca
            </h1>
            <div className=" lg:space-y-2">
                <p className="uppercase text-center p-gsap font-bold lg:text-lg">
                    Monitore a sua diabete diariamente e tenha mais qualidade de
                    vida.
                </p>
                <p className="uppercase text-center p-gsap font-bold lg:text-lg">
                    Efetue registos regularmento dos hidratos de carbono.
                </p>
            </div>
        </main>
    )
}
