import Head from 'next/head'
import HeaderUser from '../headerUser/HeaderUser'
import SideBar from '../sidebar/SideBar'
import MobileMenu from '../MobileMenu'
import { mobileOptions } from './mobileOptions'
import { useState } from 'react'

export default function LayoutUser({ children, title }) {
    const [mobileMenu, setMobileMenu] = useState(false)

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>

            <div className="flex h-screen lg:overflow-hidden w-screen">
                <SideBar />
                <div className=" flex-grow flex flex-col">
                    <HeaderUser setMobileMenu={setMobileMenu} />
                    <MobileMenu
                        mobileMenu={mobileMenu}
                        setMobileMenu={setMobileMenu}
                        options={mobileOptions}
                    />
                    {children}
                </div>
            </div>
        </>
    )
}
