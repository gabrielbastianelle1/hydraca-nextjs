import Head from 'next/head'
import { useState } from 'react'
import Header from '../header/Header'
import MobileMenu from '../MobileMenu'
import { mobileOptions } from './mobileOptions'

export default function Layout({ children, title }) {
    const [mobileMenu, setMobileMenu] = useState(false)

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>

            <div className="lg:base-background flex flex-col h-screen lg:overflow-hidden w-screen">
                <Header setMobileMenu={setMobileMenu} />
                <MobileMenu
                    mobileMenu={mobileMenu}
                    setMobileMenu={setMobileMenu}
                    options={mobileOptions}
                />
                {children}
            </div>
        </>
    )
}
