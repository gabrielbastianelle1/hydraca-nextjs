import { useState, createContext, useEffect } from 'react'
import diabetesService from '../services/service.diabete'

export const GlobalContext = createContext()

export default function GlobalProvider({ children }) {
    const [diabetesGlobal, setDiabetesGlobal] = useState([])
    const [user, setUser] = useState(null)

    useEffect(() => {
        diabetesService
            .getAllDiabetes()
            .then((response) => {
                setDiabetesGlobal(response.data)
            })
            .catch((error) => console.log(error))
    }, [])

    return (
        <GlobalContext.Provider
            value={{ diabetesGlobal, setDiabetesGlobal, user, setUser }}
        >
            {children}
        </GlobalContext.Provider>
    )
}
