import { useEffect } from 'react'
import Layout from '../components/layout/Layout'
import Home from '../components/home/Home'

export default function Index() {
    useEffect(() => {
        fetch('http://localhost:3000/api')
    })

    return (
        <Layout title="Hydraca">
            <Home />
        </Layout>
    )
}
