import Logo from '../Logo'
import Nav from './Nav'

export default function Header({ setMobileMenu }) {
    return (
        <header className="flex lg:px-20 items-center shadow bg-white suave">
            <Nav setMobileMenu={setMobileMenu} />
            <Logo className="ml-auto scale-50 lg:hidden" />
        </header>
    )
}
