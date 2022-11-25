import { useState, useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import Button from '../Button'
import Dropbox from '../Dropbox'
import FormContent from '../Form.styled'
import { updateProfile } from '../../services/service.user'

export default function Form() {
    const { diabetesGlobal, user } = useContext(GlobalContext)
    const [infoDropbox, setInfoDropbox] = useState('Selecione')
    const [sensitivity, setSensitivity] = useState(null)
    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)

    /* console.log(diabetesGlobal)
    console.log(user) */

    const onChangeSensitivity = (event) => {
        setSensitivity(event.target.value)
    }

    const onChangeHeight = (event) => {
        setHeight(event.target.value)
    }

    const onChangeWeight = (event) => {
        setWeight(event.target.value)
    }

    const handleSubmit = async (event) => {
        try {
            await updateProfile()
            setMessage({
                active: true,
                error: false,
                message: 'Success signup'
            })
        } catch (error) {
            setMessage({
                active: true,
                error: true,
                message: error.response.data
            })
        }
    }

    return (
        <div>
            <h1 className="uppercase text-center font-bold text-7xl text-colorButton mb-5">
                bem vindo
            </h1>

            <FormContent className="form">
                <p className="mb-5 text-xl">
                    Preencha os seguintes campos, para sabermos mais sobre você!
                </p>
                <Dropbox
                    label="Diabetes"
                    info={infoDropbox}
                    setInfo={setInfoDropbox}
                    data={diabetesGlobal}
                    field="type"
                />

                <label htmlFor="sensitivity">Sensibilidade</label>
                <input
                    type="number"
                    name="sensitivity"
                    id="sensitivity"
                    className="input"
                    placeholder="exemplo: 20"
                    onChange={onChangeSensitivity}
                />
                <label htmlFor="height">Altura</label>
                <input
                    type="number"
                    name="height"
                    id="height"
                    className="input"
                    placeholder="em cemtimetros"
                    onChange={onChangeHeight}
                />
                <label htmlFor="weight">Peso</label>
                <input
                    type="number"
                    name="weight"
                    id="weight"
                    className="input"
                    placeholder="em kilos"
                    onChange={onChangeWeight}
                />
                <Button>Continuar</Button>
            </FormContent>
        </div>
    )
}
