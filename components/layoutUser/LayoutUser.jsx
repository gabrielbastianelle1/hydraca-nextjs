import Head from 'next/head'
import Sidebar from '../sidebar/Sidebar'

export default function LayoutUser({ children, title }) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>

            <div className="bg-userBackground h-screen overflow-hidden w-screen">
                <Sidebar />
                {children}
            </div>
        </>
    )
}
