import Logo from '../Logo'
import Nav from './Nav'

export default function Header({ setMobileMenu }) {
    return (
        <header className="flex h-20 lg:px-20 items-center shadow bg-white suave">
            <Logo className="scale-50 lg:scale-75 " />
            <Nav setMobileMenu={setMobileMenu} />
        </header>
    )
}
