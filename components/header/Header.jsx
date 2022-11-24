import Logo from './Logo'
import Nav from './Nav'

export default function Header() {
    return (
        <header className="flex h-20 lg:px-20 items-center shadow bg-white suave">
            <Logo />
            <Nav />
        </header>
    )
}
