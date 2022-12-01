import { useState } from 'react'
import { ArrowDown } from './svgs/index'

export default function Dropbox({
    label,
    titleDropbox,
    setTitleDropbox,
    field,
    dataToShowInDropbox,
    setIdReturnedFromDropBox
}) {
    const [dropdown, setDropdown] = useState(false)

    const openDropdown = (event) => {
        setDropdown(!dropdown)
    }

    const handleClick = (event, optionChosen, idChosen) => {
        setTitleDropbox(optionChosen)
        setIdReturnedFromDropBox(idChosen)
        setDropdown(false)
    }

    return (
        <div className="relative mb-5">
            <label htmlFor="">{label}: </label>
            <button
                onClick={openDropdown}
                className=" ml-5 border hover:bg-gray-100 focus:ring-2 focus:ring-slate-200 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
                type="button"
            >
                {titleDropbox}
                <ArrowDown className="h-5 pl-2" />
            </button>
            <div
                className={`${
                    dropdown ? 'block' : 'hidden'
                } absolute left-20 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700`}
            >
                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                    {dataToShowInDropbox.map((value, index) => {
                        return (
                            <li key={index}>
                                <a
                                    onClick={(event) =>
                                        handleClick(
                                            event,
                                            value[field],
                                            value['_id']
                                        )
                                    }
                                    className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    {value[field]}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
