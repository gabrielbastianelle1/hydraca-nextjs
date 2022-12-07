import Link from 'next/link'

export default function Back() {
    return (
        <Link href="/user">
            <button className="hidden lg:flex underline">Voltar</button>
        </Link>
    )
}
