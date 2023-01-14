import { useState, useRef, useEffect } from 'react'
import OutsideClick from '../../utils/outsideClick'

export function ListItem({
    date,
    amountGlucose,
    typeInsulin,
    sensitivity,
    amountInsulinTotal,
    therapy
}) {
    return (
        <>
            <li>{date}</li>
            <li className="hidden lg:block">{amountGlucose}</li>
            <li>{typeInsulin}</li>
            <li className="hidden lg:block">{amountInsulinTotal}</li>
            <li className="hidden lg:block overflow-hidden text-ellipsis">
                {therapy}
            </li>
        </>
    )
}

export function ListRow({ children, register }) {
    const [dropBox, setDropBox] = useState(false)
    const row = useRef(null)
    const rowOutsideClick = OutsideClick(row)

    useEffect(() => {
        if (rowOutsideClick) {
            setDropBox(false)
        }
    }, [rowOutsideClick])

    const toggleDropBox = () => {
        setDropBox(!dropBox)
    }

    return (
        <span ref={row} onClick={toggleDropBox}>
            <ul className="grid items-center shadow-inner grid-cols-2 lg:grid-cols-4 gap-x-14 p-4 hover:bg-slate-100 hover:cursor-pointer">
                {children}
            </ul>
            <span className={`${dropBox ? 'block' : 'hidden'}`}>
                <ItemDrop register={register} />
            </span>
        </span>
    )
}

export function ItemDrop({ register }) {
    return (
        <div className="grid lg:grid-cols-4 gap-y-3 p-4">
            <li>
                <span className="font-bold">Exercicio fisico</span>:{' '}
                {register.degreeExercise || 'N/A'}
            </li>
            <li>
                <span className="font-bold">Tempo</span>:{' '}
                {register.timeExercise || 'N/A'}
            </li>
            <li>
                <span className="font-bold">Refeição</span>:{' '}
                {register.nameMeal || 'N/A'}
            </li>
            <li>
                <span className="font-bold">Hora</span>: {register.time}
            </li>
            <li>
                <span className="font-bold">Total de carboidratos</span>:{' '}
                {register.amountHc || 'N/A'}
            </li>
            <li>
                <span className="font-bold">Insulina correção</span>:{' '}
                {register.amountInsulinCorrection || 'N/A'}
            </li>
            <li>
                <span className="font-bold">Insulina alimentação</span>:{' '}
                {register.amountInsulinHc || 'N/A'}
            </li>
        </div>
    )
}
