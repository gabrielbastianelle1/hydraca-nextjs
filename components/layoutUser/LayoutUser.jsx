import Head from 'next/head'
import HeaderUser from '../headerUser/HeaderUser'
import SideBar from '../sidebar/SideBar'

export default function LayoutUser({ children, title }) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>

            <div className="flex h-screen overflow-hidden w-screen">
                <SideBar />
                <div className=" flex-grow flex flex-col">
                    <HeaderUser />
                    {children}
                </div>
            </div>
        </>
    )
}
