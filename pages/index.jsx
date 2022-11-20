import { useEffect } from 'react'

export default function Home() {
    useEffect(() => {
        fetch('http://localhost:3000/api')
    })

    return <div>Hello world</div>
}
