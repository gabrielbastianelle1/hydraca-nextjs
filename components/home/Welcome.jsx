import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import SplitType from 'split-type'

export default function Welcome() {
    const h1 = useRef(null)
    const h2 = useRef(null)

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
        <main>
            <div class="absolute inset-x-0 top-20 h-16">
                <h1
                    ref={h1}
                    className="uppercase  text-center font-bold text-5xl lg:text-5xl text-colorButton"
                >
                    BEM VINDO À HYDRACA
                </h1>
                <br />
                <h2
                    ref={h2}
                    className="uppercase text-center   text-lg  text-black"
                >
                    Monitore a sua diabete diariamente e tenha mais qualidade de
                    vida.
                    <br/> Efetue registos regularmento dos hidratos de carbono.
                </h2>
            </div>
        </main>
    )
}
