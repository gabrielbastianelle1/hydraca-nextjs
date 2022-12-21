import Layout from '../components/layout/Layout'
import Home from '../components/home/Home'
import { host } from '../services/host'

function Index() {
    fetch(`http://${host}:3000/api`)

    return (
        <Layout title="Hydraca">
            <Home />
        </Layout>
    )
}
export default Index
