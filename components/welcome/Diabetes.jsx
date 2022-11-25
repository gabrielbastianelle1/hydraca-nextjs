import { useState, useRef, useEffect, useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import OutsideClick from '../../utils/outsideClick'
import { ArrowDown } from '../svgs/index'

export default function Diabetes({ diabetes, setDiabetes }) {
    const { diabetesGlobal } = useContext(GlobalContext)
    const [dropdown, setDropdown] = useState(false)
    const buttonRef = useRef(null)
    const dropOutsideClick = OutsideClick(buttonRef)

    console.log('renderizei')

    /* useEffect(()=>{
        if(dropOutsideClick){
            setDropdown(false)
        }
    },[dropOutsideClick]) */

    const openDropdown = (event) => {
        setDropdown(!dropdown)
    }

    const handleClick = (event, diabetes) => {
        console.log(diabetes)
        setDiabetes(diabetes)
        setDropdown(false)
    }

    return (
        <div className="relative mb-5">
            <label htmlFor="">Diabete: </label>
            <button
                onClick={openDropdown}
                className=" ml-5 border hover:bg-gray-100 focus:ring-2 focus:ring-slate-200 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
                type="button"
            >
                {diabetes}
                <ArrowDown className="h-5 pl-2" />
            </button>
            <div
                className={`${
                    dropdown ? 'block' : 'hidden'
                } absolute left-20 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700`}
                ref={buttonRef}
            >
                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                    {diabetesGlobal.map((diabetes, index) => {
                        return (
                            <li key={index}>
                                <a
                                    onClick={(event) =>
                                        handleClick(event, diabetes)
                                    }
                                    className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    {diabetes}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
