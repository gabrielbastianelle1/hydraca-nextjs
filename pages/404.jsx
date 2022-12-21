import Link from 'next/link'

const NotFound = () => {
    return (
        <div className="relative py-16 px-4 w-full min-h-screen bg-white">
            <div className="flex flex-col items-center">
                <div className="text-center space-y-5">
                    {/**
                     *    <p className="text-6xl sm:text-7xl text-blue-800 font-bold tracking-wide">404</p>
                     */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl text-gray-700 font-semibold capitalize">
                        A página não existe
                    </h1>
                    <p className="text-sm text-gray-500 font-medium">
                        Desculpa! Volte para a página inicial ou entre em
                        contato.
                    </p>
                </div>

                {/* :OPTION LINKS */}
                <div className="mt-8 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                    <a
                        href="/"
                        className="px-5 py-2.5 rounded border border-transparent bg-blue-600 text-center text-base text-white font-medium hover:bg-blue-700"
                    >
                        Página inicial
                    </a>
                    <a
                        href="/about"
                        className="px-5 py-2.5 rounded border-2 border-blue-400 bg-transparent text-center text-base text-blue-400 font-medium hover:border-blue-500 hover:text-blue-500"
                    >
                        Contato
                    </a>
                </div>
                <img src="images/3.jpg" alt="" className="mt-10 max-h-96" />
            </div>
        </div>
    )
}

export default NotFound
