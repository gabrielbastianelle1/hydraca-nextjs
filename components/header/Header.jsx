import Logo from './Logo'
import Nav from './Nav'

export default function Header() {
    return (
        <header className="flex h-20">
            <Logo />
            <Nav />
        </header>
    )
}
