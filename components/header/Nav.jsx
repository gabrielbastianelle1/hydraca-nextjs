import { MenuIcon } from '@heroicons/react/solid'
import NavItem from './NavItem'
import Logo from '../Logo'
import Link from 'next/link'
import Image from 'next/image'

export default function Nav({ setMobileMenu }) {
    const openMobileMenu = () => {
        setMobileMenu(true)
    }

    return (
        <>
            <MenuIcon
                onClick={openMobileMenu}
                className="h-12 ml-6  stroke-slate-600 cursor-pointer lg:hidden "
            />

            <nav className="hidden lg:flex items-center w-full">
                <Logo className="  scale-75 " />
                <div className="flex-grow flex justify-center space-x-20 text-colorButton">
                    <NavItem hrefLink="/" text="Início" />
                    <NavItem hrefLink="/about" text="Sobre" />
                    <NavItem hrefLink="" text="Contatos" />
                    <NavItem hrefLink="/signin" text="Iniciar sessão" />
                </div>
                <Link href="/signup">
                    <span className="font-extrabold text-white bg-colorButton px-5 py-2 rounded cursor-pointer">
                        Registar
                    </span>
                </Link>
            </nav>
        </>
    )
}
