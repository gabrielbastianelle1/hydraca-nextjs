import { MenuIcon } from '@heroicons/react/solid'
import Back from './Back'
import Logo from '../Logo'
import Logout from './Logout'

export default function HeaderUser({ setMobileMenu }) {
    const openMobileMenu = () => {
        setMobileMenu(true)
    }

    return (
        <header className="flex items-center lg:p-8 shadow max-h-[76px]">
            <MenuIcon
                onClick={openMobileMenu}
                className="h-12 ml-6 stroke-slate-600 cursor-pointer lg:hidden "
            />
            <Logo className="ml-auto scale-50 lg:hidden" />
            <Back />
            <Logout />
        </header>
    )
}
