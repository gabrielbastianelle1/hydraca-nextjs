import { useState, useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import Button from '../Button'
import Dropbox from '../Dropbox'
import FormContent from '../Form.styled'
import { updateProfile } from '../../services/service.user'
import { calcImc } from './calcimc'
import useRouter from 'next/router'

export default function Form() {
    const navigate = useRouter
    const { diabetesGlobal, therapyGlobal } = useContext(GlobalContext)

    const [titleDropbox, setTitleDropbox] = useState('Selecione')
    const [idReturnedFromDropBoxTherapy, setIdReturnedFromDropBoxTherapy] =
        useState(null)
    const [idReturnedFromDropBox, setIdReturnedFromDropBox] = useState(null)
    const [sensitivity, setSensitivity] = useState('')
    const [carbRatio, setCarbRatio] = useState('')
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [titleDropBoxTherapy, setTitleDropBoxTherapy] = useState('Selecione')

    const [message, setMessage] = useState({
        active: false,
        error: false,
        message: ''
    })

    const onChangeSensitivity = (event) => {
        setSensitivity(event.target.value)
    }

    const onChangeCarbRatio = (event) => {
        setCarbRatio(event.target.value)
    }

    const onChangeHeight = (event) => {
        setHeight(event.target.value)
    }

    const onChangeWeight = (event) => {
        setWeight(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log(idReturnedFromDropBox)

        if (sensitivity == 0) {
            setMessage({
                active: true,
                error: true,
                message: 'O campo de fator de correção está incorreto'
            })
            return
        }
        if (carbRatio == 0 || carbRatio < 0) {
            setMessage({
                active: true,
                error: true,
                message: 'O campo de sensibilidade  insulina está incorreto'
            })
            return
        }
        if (height == 0 || height < 0) {
            setMessage({
                active: true,
                error: true,
                message: 'O campo de altura está incorreto'
            })
            return
        }
        if (weight == 0 || weight < 0) {
            setMessage({
                active: true,
                error: true,
                message: 'O campo de peso está incorreto'
            })
            return
        }

        try {
            await updateProfile({
                idDiabetes: idReturnedFromDropBox,
                therapy: idReturnedFromDropBoxTherapy,
                height: height,
                weight: weight,
                sensitivity: sensitivity,
                carbRatio: carbRatio,
                imc: calcImc(weight, height)
            })
            navigate.push('/user')
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

            <FormContent
                active={message.active}
                error={message.error}
                message={message.message}
                className="form"
            >
                <p className="mb-5 text-xl">
                    Preencha os seguintes campos, para sabermos mais sobre você!
                </p>
                <Dropbox
                    label="Diabetes"
                    titleDropbox={titleDropbox}
                    setTitleDropbox={setTitleDropbox}
                    dataToShowInDropbox={diabetesGlobal}
                    field="type"
                    setIdReturnedFromDropBox={setIdReturnedFromDropBox}
                />
                <div className="item-form">
                    <label htmlFor="sensitivity">Fator de Correção: </label>
                    <input
                        type="number"
                        name="sensitivity"
                        id="sensitivity"
                        className="input"
                        value={sensitivity}
                        placeholder="exemplo: 20"
                        onChange={onChangeSensitivity}
                    />
                </div>
                <div className="item-form">
                    <label htmlFor="sensitivity">
                        Sensibilidade à insulina:{' '}
                    </label>
                    <input
                        type="number"
                        name="carbRatio"
                        id="carbRatio"
                        className="input"
                        placeholder="exemplo: 20"
                        onChange={onChangeCarbRatio}
                    />
                </div>
                <Dropbox
                    label="Tipo de terapia"
                    titleDropbox={titleDropBoxTherapy}
                    setTitleDropbox={setTitleDropBoxTherapy}
                    dataToShowInDropbox={therapyGlobal}
                    field="type"
                    setIdReturnedFromDropBox={setIdReturnedFromDropBoxTherapy}
                />

                <div className="item-form">
                    <label htmlFor="height">Altura: </label>
                    <input
                        type="number"
                        name="height"
                        id="height"
                        className="input"
                        placeholder="em centimetros"
                        onChange={onChangeHeight}
                    />
                </div>

                <div className="item-form">
                    <label htmlFor="weight">Peso: </label>
                    <input
                        type="number"
                        name="weight"
                        id="weight"
                        className="input"
                        placeholder="em kg"
                        onChange={onChangeWeight}
                    />
                </div>
                <Button onClick={handleSubmit}>Continuar</Button>
            </FormContent>
        </div>
    )
}
