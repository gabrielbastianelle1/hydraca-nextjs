import Head from 'next/head'
import Header from '../header/Header'

export default function Layout({ children, title }) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>

            <div className="lg:base-background flex flex-col h-screen overflow-hidden w-screen">
                <Header />
                {children}
            </div>
        </>
    )
}
