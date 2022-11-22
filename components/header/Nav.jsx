import { MenuIcon } from '@heroicons/react/solid'
import NavItem from './NavItem'

export default function Nav() {
    return (
        <>
            <MenuIcon className="h-12 ml-auto stroke-slate-600 cursor-pointer lg:hidden" />
            <nav className="hidden lg:flex items-center w-full">
                <div className="flex-grow flex justify-center space-x-20">
                    <NavItem hrefLink="teste" text="Home" />
                    <NavItem hrefLink="teste" text="About" />
                    <NavItem hrefLink="teste" text="Contact" />
                    <NavItem hrefLink="teste" text="Signin" />
                </div>
                <buttom className="font-extrabold text-white bg-colorButton px-5 py-2 rounded cursor-pointer">
                    Signup
                </buttom>
            </nav>
        </>
    )
}
