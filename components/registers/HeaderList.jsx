import { orderByInsulin, orderByDate } from './orders'

export default function HeaderList({ registers, setRegisters }) {
    const onClickDate = () => {}

    const onClickInsulin = () => {
        setRegisters(orderByDate({ registers }))
        console.log('cliquei')
    }

    return (
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-14 bg-headerList text-white font-bold p-2 rounded-lg px-10">
            <p className="cursor-pointer" onClick={onClickDate}>
                Data
            </p>
            <p className="hidden lg:block">Glicose</p>
            <p>Tipo insulina</p>
            <p
                className="hidden lg:block cursor-pointer"
                onClick={onClickInsulin}
            >
                Insulina
            </p>
            <p className="hidden lg:block">Terapia</p>
        </div>
    )
}
