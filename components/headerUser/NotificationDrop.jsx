export default function NotificationDrop({ dropdown }) {
    return (
        <>
            <span
                className={`${
                    dropdown ? 'hidden' : 'block'
                } w-[30px] h-[30px] border bg-white border-blue-500 absolute rotate-45 top-10 z-10 border-b-0 border-r-0`}
            ></span>
            <span
                className={`${
                    dropdown ? 'hidden' : 'flex'
                } items-center w-[250px] h-[150px] border bg-white border-blue-500 absolute top-[54px] -right-28 rounded-xl`}
            >
                <p>Não se esqueça de efetuar os registos hoje!</p>
            </span>
        </>
    )
}
