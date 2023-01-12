export function ListItem({ name, qtd, Hc }) {
    return (
        <>
            <li className="lg:block">{name}</li>
            <li className="hidden lg:block">{qtd}</li>
            <li className="lg:block">{Hc}</li>
        </>
    )
}

export function ListRow({ children }) {
    return (
        <span>
            <ul className="grid items-center shadow-inner grid-cols-2 lg:grid-cols-3 gap-x-14 p-4 ">
                {children}
            </ul>
        </span>
    )
}
