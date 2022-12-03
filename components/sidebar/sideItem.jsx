import Link from 'next/link'

export default function SideItem({ text, hrefLink }) {
    return (
        <Link href={hrefLink}>
            <span className="text-center font-bold text-md hover:underline">
                {text}
            </span>
        </Link>
    )
}
