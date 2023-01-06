import Logo from '../Logo'
import Nav from './Nav'

export default function Header({ setMobileMenu }) {
    return (
        <header className="flex h-20 lg:px-20 items-center shadow bg-white suave">
            <Nav setMobileMenu={setMobileMenu} />
            <Logo className="scale-50  lg:hidden lg:scale-75 " />
        </header>
    )
}
