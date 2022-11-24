import Layout from '../components/layout/Layout'
import Home from '../components/home/Home'

function Index() {
    fetch('http://localhost:3000/api')

    return (
        <Layout title="Hydraca">
            <Home />
        </Layout>
    )
}
export default Index
