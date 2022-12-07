import { useState } from 'react'
import { NotificationIcon } from '../svgs'
import NotificationDrop from './NotificationDrop'

export default function Notification() {
    const [dropdown, setDropdown] = useState(true)

    const openDropdown = () => {
        setDropdown(!dropdown)
    }

    return (
        <button
            onClick={openDropdown}
            className="relative flex-grow flex justify-end"
        >
            <NotificationDrop dropdown={dropdown} />
            <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-1 bg-red-500 rounded-full" />
            <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-1 bg-red-500 rounded-full animate-ping" />
            <NotificationIcon className="h-7" />
        </button>
    )
}
