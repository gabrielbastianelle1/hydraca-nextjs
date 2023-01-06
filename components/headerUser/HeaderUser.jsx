import { MenuIcon } from '@heroicons/react/solid'
import Back from './Back'
import Logo from '../Logo'
import Logout from './Logout'
import Notification from './Notification'

export default function HeaderUser({ setMobileMenu }) {
    const openMobileMenu = () => {
        setMobileMenu(true)
    }

    return (
        <header className="flex justify-between items-center space-x-2 lg:space-x-10  group p-4 lg:p-8 shadow">
            <MenuIcon
                onClick={openMobileMenu}
                className="h-8 ml-auto ml-4  stroke-slate-600 cursor-pointer lg:hidden "
            />
            <Back className="md:hidden" />
            <Logo className=" h-auto mr-32 w-28 lg:hidden" />
            <Logout className=" lg:hidden " />
        </header>
    )
}
