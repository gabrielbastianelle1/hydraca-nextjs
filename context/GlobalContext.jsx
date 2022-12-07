import { useState, createContext, useEffect } from 'react'
import diabetesService from '../services/service.diabete'
import { getCurrentUser } from '../services/service.auth'

export const GlobalContext = createContext()

export default function GlobalProvider({ children }) {
    const [diabetesGlobal, setDiabetesGlobal] = useState([])
    const [userGlobal, setUserGlobal] = useState({})

    useEffect(() => {
        getCurrentUser()
            .then((response) => setUserGlobal(response.data.user))
            .catch((error) => console.log(error))

        diabetesService
            .getAllDiabetes()
            .then((response) => {
                setDiabetesGlobal(response.data)
            })
            .catch((error) => console.log(error))
    }, [])

    console.log('context')

    return (
        <GlobalContext.Provider
            value={{
                diabetesGlobal,
                setDiabetesGlobal,
                userGlobal,
                setUserGlobal
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}
