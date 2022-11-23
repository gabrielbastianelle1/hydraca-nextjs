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
        <main>
            <h1
                ref={h1}
                className="uppercase text-4xl md:text-5xl lg:text-7xl text-colorButton overflow-hidden mb-5 text-center"
            >
                welcome to hydraca.
            </h1>
            <div className="space-y-2">
                <p className="text-center p-gsap lg:text-2xl">
                    Monitor your diabetes daily and have more quality of life
                </p>
                <p className="text-center p-gsap lg:text-2xl">
                    Carry out rebooking records of carbohydrates
                </p>
                <p className="text-center p-gsap lg:text-2xl">Sign up now!</p>
            </div>
        </main>
    )
}
