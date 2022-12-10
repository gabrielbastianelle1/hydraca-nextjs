import { useState, createContext, useEffect } from 'react'
import diabetesService from '../services/service.diabete'

export const GlobalContext = createContext()

export default function GlobalProvider({ children }) {
    const [diabetesGlobal, setDiabetesGlobal] = useState([])
    const [mealGlobal, setMealGlobal] = useState([
        {
            _id: 'Café da Manha',
            type: 'Café da Manha'
        },
        {
            _id: 'Almoço',
            type: 'Almoço'
        },
        {
            _id: 'Lancha da tarde',
            type: 'Lanche da tarde'
        },
        {
            _id: 'Jantar',
            type: 'Jantar'
        }
    ])
    const [exerciseGlobal, setExerciseGlobal] = useState([
        {
            _id: 'Leve',
            type: 'Leve'
        },
        {
            _id: 'Moderado',
            type: 'Moderado'
        },
        {
            _id: 'Intenso',
            type: 'Intenso'
        }
    ])

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
            value={{
                diabetesGlobal,
                setDiabetesGlobal,
                mealGlobal,
                exerciseGlobal
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}
