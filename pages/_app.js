import GlobalContext from '../context/GlobalContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return (
        <GlobalContext>
            <Component {...pageProps} />
        </GlobalContext>
    )
}

export default MyApp
