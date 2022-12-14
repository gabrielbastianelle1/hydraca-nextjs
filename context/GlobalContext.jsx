import { useState, createContext, useEffect } from 'react'
import diabetesService from '../services/service.diabete'

export const GlobalContext = createContext()

export default function GlobalProvider({ children }) {
    const [diabetesGlobal, setDiabetesGlobal] = useState([])
    const [mealGlobal] = useState([
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
    const [exerciseGlobal] = useState([
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
    const [therapyGlobal, setTherapyGlobal] = useState([
        {
            _id: 'Ingestão de insulina prandial',
            type: 'Ingestão de insulina prandial'
        },
        {
            _id: 'Insulinoterapia convencional',
            type: 'Insulinoterapia convencional'
        },
        {
            _id: 'Terapeutica intensiva com insulina',
            type: 'Terapeutica intensiva com insulina'
        },
        {
            _id: 'Terapia com bomba de insulina',
            type: 'Terapia com bomba de insulina'
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
                exerciseGlobal,
                therapyGlobal,
                setTherapyGlobal
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}
