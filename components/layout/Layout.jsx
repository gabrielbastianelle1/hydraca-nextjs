import Head from 'next/head'
import Header from '../header/Header'

export default function Layout({ children, title }) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>

            <div className="lg:base-background min-h-screen overflow-hidden">
                <Header />

                {children}
            </div>
        </>
    )
}
