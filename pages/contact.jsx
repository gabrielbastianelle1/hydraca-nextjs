import { useEffect } from 'react'
import Layout from '../components/layout/Layout'
import Contact from '../components/contact/Contact'
import dynamic from 'next/dynamic'

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

    const DynamicComponentWithNoSSR = dynamic(
        () => import('../components/contact/Maps'),
        {
            ssr: false
        }
    )

    return (
        <Layout title="Hydraca">
            <Contact />
        </Layout>
    )
}
export default contact
