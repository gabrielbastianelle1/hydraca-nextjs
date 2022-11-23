import { MenuIcon } from '@heroicons/react/solid'
import NavItem from './NavItem'
import Logo from './Logo'

/**
 * Nav principal
 * @returns {JSX.Element}
 * @constructor
 */
export default function Nav() {
    return (
        <>
            <MenuIcon className="h-12 ml-auto stroke-slate-600 cursor-pointer lg:hidden " />
            <nav className="hidden lg:flex items-center w-full ">
                <div className="flex-grow flex justify-center space-x-20 text-colorButton">
                    <NavItem hrefLink="/" text="Início" />
                    <NavItem hrefLink="/about" text="Sobre" />
                    <NavItem hrefLink="" text="Contatos" />
                    <NavItem hrefLink="/signin/login" text="Iniciar sessão" />
                </div>
                <buttom className="font-extrabold text-white bg-colorButton px-5 py-2 rounded cursor-pointer">
                    Registo
                </buttom>
            </nav>
        </>
    )
}
