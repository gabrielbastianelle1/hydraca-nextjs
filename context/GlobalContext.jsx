import { useState, createContext, useEffect } from 'react'
import diabetesService from '../services/service.diabete'

export const GlobalContext = createContext()

export default function GlobalProvider({ children }) {
    const [diabetesGlobal, setDiabetesGlobal] = useState([
        'diabetes tipo 1',
        'diabetes tipo 2'
    ])

    /* useEffect(() => {
        diabetesService.getAllDiabete()
        .then((response)=>{
            console.log('lalalal')
            setDiabetes(response.data)
        })
        .catch(error=>console.log(error))
    }) */

    return (
        <GlobalContext.Provider value={{ diabetesGlobal }}>
            {children}
        </GlobalContext.Provider>
    )
}
