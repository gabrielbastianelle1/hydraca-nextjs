import { MenuIcon } from '@heroicons/react/solid'
import Back from './Back'
import Logout from './Logout'
import Notification from './Notification'

export default function HeaderUser({ setMobileMenu }) {
    const openMobileMenu = () => {
        setMobileMenu(true)
    }

    return (
        <header className="flex justify-between items-center space-x-2 lg:space-x-10 group p-5 lg:p-8 shadow">
            <MenuIcon
                onClick={openMobileMenu}
                className="h-12 ml-auto mr-10 stroke-slate-600 cursor-pointer lg:hidden "
            />
            <Back />
            <Notification />
            <Logout />
        </header>
    )
}
