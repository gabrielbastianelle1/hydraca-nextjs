import { MenuIcon } from '@heroicons/react/solid'
import Back from './Back'
import Logout from './Logout'
import Notification from './Notification'

export default function HeaderUser() {
    return (
        <header className="flex justify-between items-center space-x-10 group p-5 lg:p-8 shadow suave">
            <MenuIcon className="h-12 ml-auto mr-10 stroke-slate-600 cursor-pointer lg:hidden " />
            <Back />
            <Notification />
            <Logout />
        </header>
    )
}
