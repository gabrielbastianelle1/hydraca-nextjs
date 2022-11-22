import { useRef, useLayoutEffect } from 'react'

export default function Welcome() {
    const h1 = useRef(null)
    return (
        <main>
            <h1
                ref={h1}
                className="uppercase text-3xl lg:text-5xl text-colorButton"
            >
                welcome to hydraca.
            </h1>
        </main>
    )
}
