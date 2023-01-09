import Link from 'next/link'
import { logout } from '../services/service.auth'
import { CloseButton } from './svgs'

export default function MobileMenu({ mobileMenu, setMobileMenu, options }) {
    const closeMenu = ({ href }) => {
        setMobileMenu(false)
        if (href == '/') {
            logout()
        }
    }

    return (
        <main
            className={`${
                mobileMenu ? 'fixed' : 'hidden'
            } flex flex-col items-center bg-white h-screen w-screen z-10 font-bold`}
        >
            <span
                className="absolute right-10 top-10 cursor-pointer"
                onClick={closeMenu}
            >
                <CloseButton className="w-5 h-5" />
            </span>
            <div className="mt-40 grid items-center text-center space-y-7">
                {options.map((option) => {
                    return (
                        <MenuItem
                            href={option.href}
                            closeMenu={() => {
                                closeMenu(option.href)
                            }}
                            className={option.className}
                        >
                            {option.text}
                        </MenuItem>
                    )
                })}
            </div>
        </main>
    )
}

function MenuItem({ children, href, closeMenu, className }) {
    return (
        <Link href={href} onClick={closeMenu} className={className}>
            {children}
        </Link>
    )
}
