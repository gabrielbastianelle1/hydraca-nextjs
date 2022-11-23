import Link from 'next/link'

export default function NavItem({ text, hrefLink }) {
    return (
        <Link href={hrefLink}>
            <span className="font-extrabold text-lg hover:underline">
                {text}
            </span>
        </Link>
    )
}
