import { useEffect } from 'react'
import Layout from '../components/layout/Layout'
import Contact from '../components/contact/Contact'

function contact() {
    /**
const MapWithNoSSR = dynamic(() => import('../components/contact/Map'), {
    loading: () => <p>A map is loading</p>,
    ssr: false,
  })


     *       <div>
      <MapWithNoSSR />
    </div>
     */

    return (
        <Layout title="Hydraca">
            <Contact />
        </Layout>
    )
}
export default contact
