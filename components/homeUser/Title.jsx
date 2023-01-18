import { useState, useEffect } from 'react'
import { getCurrentUser } from '../../services/service.auth'

export default function Title() {
    const [user, setUser] = useState({})

    useEffect(() => {
        getCurrentUser()
            .then((response) => setUser(response.data.user))
            .catch((error) => console.log(error))
    }, [])

    return <h1 className="title m-0 text-3xl ">Bem vindo, {user.name}!</h1>
}
