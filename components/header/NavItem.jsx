import Link from 'next/link'

export default function NavItem({ text, hrefLink }) {
    return (
        <Link href={hrefLink}>
            <span className="font-extrabold text-lg link link-underline link-underline-black">
                {text}
            </span>
        </Link>
    )
}
