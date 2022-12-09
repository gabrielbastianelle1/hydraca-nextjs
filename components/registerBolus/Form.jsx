import { React, useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import Button from '../Button'
import Dropbox from '../Dropbox'
import FormContent from '../Form.styled'

export default function Form() {
    const { diabetesGlobal } = useContext(GlobalContext)

    const [titleDropbox, setTitleDropbox] = useState('Selecione')
    const [idReturnedFromDropBox, setIdReturnedFromDropBox] = useState(null)

    return (
        <FormContent className="form lg:grid-cols-2 lg:grid-rows-6 gap-y-1 gap-x-4">
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
                titleDropbox={titleDropbox}
                setTitleDropbox={setTitleDropbox}
                dataToShowInDropbox={diabetesGlobal}
                field="type"
                setIdReturnedFromDropBox={setIdReturnedFromDropBox}
            />
            <Dropbox
                label="Exercicio fisico"
                titleDropbox={titleDropbox}
                setTitleDropbox={setTitleDropbox}
                dataToShowInDropbox={diabetesGlobal}
                field="type"
                setIdReturnedFromDropBox={setIdReturnedFromDropBox}
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
