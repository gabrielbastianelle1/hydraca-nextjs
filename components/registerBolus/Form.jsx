import { React, useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import Button from '../Button'
import Dropbox from '../Dropbox'
import FormContent from '../Form.styled'

export default function Form() {
    const { mealGlobal, exerciseGlobal } = useContext(GlobalContext)

    const [titleDropboxMeal, setTitleDropboxMeal] = useState('Selecione')
    const [titleDropboxExercise, setTitleDropboxExercise] =
        useState('Selecione')

    const [idReturnedFromDropBoxMeal, setIdReturnedFromDropBoxMeal] =
        useState(null)
    const [idReturnedFromDropBoxExercise, setIdReturnedFromDropBoxExercise] =
        useState(null)

    const [amountGlucose, setAmountGlucose] = useState(null)

    return (
        <FormContent className="form lg:grid-cols-2 lg:grid-rows-6  gap-y-16 lg:gap-y-4 gap-x-4">
            <div className="item-form lg:col-span-2">
                <label htmlFor="amountGlucose">Nível de Glicose: </label>
                <input
                    className="input"
                    placeholder="exemplo: 180"
                    type="number"
                />
            </div>
            <div className="item-form">
                <label htmlFor="amountGlucose">Hora: </label>
                <input className="input" type="date" />
            </div>
            <div className="item-form">
                <label htmlFor="amountGlucose">Hora: </label>
                <input className="input" type="time" />
            </div>
            <div className="item-form lg:col-span-2">
                <label htmlFor="amountGlucose">Total de carboidratos: </label>
                <input
                    className="input"
                    placeholder="exemplo: 300"
                    type="number"
                />
            </div>
            <Dropbox
                label="Refeição"
                titleDropbox={titleDropboxMeal}
                setTitleDropbox={setTitleDropboxMeal}
                dataToShowInDropbox={mealGlobal}
                field="type"
                setIdReturnedFromDropBox={setIdReturnedFromDropBoxMeal}
            />
            <Dropbox
                label="Exercicio fisico"
                titleDropbox={titleDropboxExercise}
                setTitleDropbox={setTitleDropboxExercise}
                dataToShowInDropbox={exerciseGlobal}
                field="type"
                setIdReturnedFromDropBox={setIdReturnedFromDropBoxExercise}
            />
            <div className="item-form lg:col-span-2">
                <label htmlFor="amountGlucose">
                    Tempo de exercicio fisico:{' '}
                </label>
                <input
                    className="input"
                    placeholder="em minutos"
                    type="number"
                />
            </div>
            <Button>Calcular</Button>
            <Button>Salvar</Button>
        </FormContent>
    )
}
