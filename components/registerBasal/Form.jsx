import { React, useState, useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import Button from '../Button'
import Dropbox from '../Dropbox'
import { registerBasal } from '../../services/service.basal'
import FormContent from '../Form.styled'

/**
 *
 escala -->   glucoseTrend
 data --> date
 hora --> time
 dose --> amountInsulin (dose de insulina )
 typeInsulin  --> tipo de insulina
 */

export default function Form() {
    const [glucoseTrend, setGlucoseTrend] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [amountInsulin, setamountInsulin] = useState('')
    const [typeInsulin, setTypeInsulin] = useState('')

    const onChangeGlucoseTrend = (e) => {
        setGlucoseTrend(e.target.value)
    }

    const onChangeDate = (e) => {
        setDate(e.target.value)
    }

    const onChangeTime = (e) => {
        setTime(e.target.value)
    }

    const onChangeamountInsulin = (e) => {
        setamountInsulin(e.target.value)
    }

    const onChangetypeInsulin = (e) => {
        setTypeInsulin(e.target.value)
    }
    async function handleSubmit(e) {
        e.preventDefault()

        try {
            await registerBasal({
                glucoseTrend: glucoseTrend,
                date: date,
                time: time,
                amountInsulin: amountInsulin,
                typeInsulin: typeInsulin
            })
        } catch (error) {
            console.log(error.response.data)
        }
    }

    return (
        <FormContent className="form lg:grid-cols-2 lg:grid-rows-6 gap-y-16 lg:gap-y-4 gap-x-4">
            <div className="item-form lg:col-span-2">
                <label htmlFor="aGlucoseTrend">Escala: </label>
                <input
                    className="input"
                    placeholder=""
                    onChange={onChangeGlucoseTrend}
                    value={glucoseTrend}
                    type="text"
                />
            </div>
            <div className="item-form">
                <label htmlFor="amountGlucose">Data: </label>
                <input
                    onChange={onChangeDate}
                    value={date}
                    className="input"
                    type="text"
                />
            </div>
            <div className="item-form">
                <label htmlFor="amountGlucose">Hora: </label>
                <input
                    onChange={onChangeTime}
                    value={time}
                    className="input"
                    type="text"
                />
            </div>
            <div className="item-form">
                <label htmlFor="amountGlucose">Dose: </label>
                <input
                    onChange={onChangeamountInsulin}
                    value={amountInsulin}
                    className="input"
                    type="number"
                />
            </div>
            <div className="item-form lg:col-span-2">
                <label htmlFor="amountGlucose">Tipo de insulina: </label>
                <input
                    onChange={onChangetypeInsulin}
                    value={typeInsulin}
                    className="input"
                    placeholder="exemplo: 300"
                    type="text"
                />
            </div>
            <div className=" ml-80 mt-2">
                <Button onClick={handleSubmit}>Salvar</Button>
            </div>
        </FormContent>
    )
}
