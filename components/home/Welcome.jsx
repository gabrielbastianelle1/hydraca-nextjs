import { useRef, useLayoutEffect } from 'react'

export default function Welcome() {
    const h1 = useRef(null)
    const h2 = useRef(null)
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
                    <br /> Efetue registos regularmento dos hidratos de carbono.
                </h2>
            </div>
        </main>
    )
}
