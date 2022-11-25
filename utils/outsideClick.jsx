import { useEffect, useState } from 'react'

export default function OutsideClick(ref) {
    const [isDown, setisDown] = useState()

    useEffect(() => {
        function handleClickOutside(event) {
            //console.log(ref.current.classList.contains('hidden'))
            if (ref.current && !ref.current.classList.contains('hidden')) {
                setisDown(true)
            } else {
                setisDown(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [ref])

    return isDown
}
