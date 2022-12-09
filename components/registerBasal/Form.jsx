import { React, useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import Button from '../Button'
import Dropbox from '../Dropbox'
import FormContent from '../Form.styled'

export default function Form() {
    return (
        <FormContent className="form lg:grid-cols-2 lg:grid-rows-6 gap-y-16 lg:gap-y-4 gap-x-4">
            <div className="item-form lg:col-span-2">
                <label htmlFor="amountGlucose">Escala: </label>
                <input className="input" placeholder="" type="number" />
            </div>
            <div className="item-form">
                <label htmlFor="amountGlucose">Data: </label>
                <input className="input" type="date" />
            </div>
            <div className="item-form">
                <label htmlFor="amountGlucose">Hora: </label>
                <input className="input" type="time" />
            </div>
            <div className="item-form">
                <label htmlFor="amountGlucose">Dose: </label>
                <input className="input" type="time" />
            </div>
            <div className="item-form lg:col-span-2">
                <label htmlFor="amountGlucose">Terapia: </label>
                <input
                    className="input"
                    placeholder="exemplo: 300"
                    type="number"
                />
            </div>
            <div className=" ml-80 mt-2">
                <Button>Salvar</Button>
            </div>
        </FormContent>
    )
}
