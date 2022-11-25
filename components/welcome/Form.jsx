import { useState, useContext } from 'react'
import Button from '../Button'
import FormContent from '../Form.styled'
import Diabetes from './Diabetes'

export default function Form() {
    const [diabetes, setDiabetes] = useState('Selecione')

    return (
        <div>
            <h1 className="uppercase text-center font-bold text-7xl text-colorButton mb-5">
                bem vindo
            </h1>

            <FormContent className="form">
                <p className="mb-5 text-xl">
                    Preencha os seguintes campos, para sabermos mais sobre você!
                </p>
                <Diabetes diabetes={diabetes} setDiabetes={setDiabetes} />

                <label htmlFor="sensitivity">Sensibilidade</label>
                <input
                    type="number"
                    name="sensitivity"
                    id="sensitivity"
                    className="input"
                    placeholder="exemplo: 20"
                />
                <label htmlFor="height">Altura</label>
                <input
                    type="number"
                    name="height"
                    id="height"
                    className="input"
                    placeholder="em cemtimetros"
                />
                <label htmlFor="weight">Peso</label>
                <input
                    type="number"
                    name="weight"
                    id="weight"
                    className="input"
                    placeholder="em kilos"
                />
                <Button>Continuar</Button>
            </FormContent>
        </div>
    )
}
