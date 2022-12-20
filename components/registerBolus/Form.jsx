import { React, useState, useContext } from 'react'
import { useRouter } from 'next/router'
import { GlobalContext } from '../../context/GlobalContext'
import { registerBolus } from '../../services/service.bolus'
import Button from '../Button'
import Dropbox from '../Dropbox'
import FormContent from '../Form.styled'
import Modal from './Modal'

export default function Form() {
    const router = useRouter()
    const { mealGlobal, exerciseGlobal, therapyGlobal } =
        useContext(GlobalContext)

    const [titleDropboxMeal, setTitleDropboxMeal] = useState('Selecione')
    const [titleDropboxExercise, setTitleDropboxExercise] =
        useState('Selecione')
    const [titleDropboxTherapy, setTitleDropboxTherapy] = useState('Selecione')

    const [idReturnedFromDropBoxMeal, setIdReturnedFromDropBoxMeal] =
        useState(undefined)
    const [idReturnedFromDropBoxExercise, setIdReturnedFromDropBoxExercise] =
        useState(undefined)
    const [idReturnedFromDropBoxTherapy, setIdReturnedFromDropBoxTherapy] =
        useState(undefined)

    const [amountGlucose, setAmountGlucose] = useState(undefined)
    const [date, setDate] = useState(undefined)
    const [time, setTime] = useState(undefined)
    const [amountHc, setAmountHc] = useState(undefined)
    const [timeExercise, setTimeExercise] = useState(undefined)

    const [amountInsulinTotal, setAmountInsulinTotal] = useState(undefined)
    const [amountInsulinHc, setAmountInsulinHc] = useState(undefined)
    const [amountInsulinCorrection, setAmountInsulinCorrection] =
        useState(undefined)

    const [modal, setModal] = useState(false)

    const [message, setMessage] = useState({
        active: false,
        error: false,
        message: ''
    })

    const onChangeAmountGlucose = (event) => {
        setAmountGlucose(event.target.value)
    }

    const onChangeDate = (event) => {
        setDate(event.target.value)
    }

    const onChangeTime = (event) => {
        setTime(event.target.value)
    }

    const onChangeAmountHc = (event) => {
        setAmountHc(event.target.value)
    }

    const onChangeTimeExercise = (event) => {
        setTimeExercise(event.target.value)
    }

    const toggleModal = () => {
        setModal(false)
    }

    const sendRequest = async () => {
        try {
            let response = await registerBolus({
                amountGlucose: amountGlucose,
                therapy: idReturnedFromDropBoxTherapy,
                date: date,
                time: time,
                amountHc: amountHc,
                nameMeal: idReturnedFromDropBoxMeal,
                degreeExercise: idReturnedFromDropBoxExercise,
                timeExercise: timeExercise
            })

            setAmountInsulinTotal(response.data.amountInsulinTotal)
            setAmountInsulinHc(response.data.amountInsulinHc)
            setAmountInsulinCorrection(response.data.amountInsulinCorrection)
        } catch (error) {
            setMessage({
                active: true,
                error: true,
                message: 'Faltando valores'
            })
        }
    }

    const handleCalcular = async (event) => {
        event.preventDefault()
        setModal(true)
        sendRequest()
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        router.push('/user')
    }

    return (
        <>
            <FormContent
                className="form lg:grid-cols-2 lg:grid-rows-7  gap-y-16 lg:gap-y-6 gap-x-4"
                active={message.active}
                error={message.error}
                message={message.message}
            >
                <div className="item-form lg:col-span-2">
                    <label htmlFor="amountGlucose">Nível de Glicose: </label>
                    <input
                        className="input"
                        placeholder="exemplo: 180"
                        type="number"
                        onChange={onChangeAmountGlucose}
                        value={amountGlucose}
                    />
                </div>
                <div className="item-form">
                    <label htmlFor="amountGlucose">Data: </label>
                    <input
                        className="input"
                        type="date"
                        value={date}
                        onChange={onChangeDate}
                    />
                </div>
                <div className="item-form">
                    <label htmlFor="amountGlucose">Hora: </label>
                    <input
                        className="input"
                        type="time"
                        value={time}
                        onChange={onChangeTime}
                    />
                </div>
                <div className="item-form lg:col-span-2">
                    <label htmlFor="amountGlucose">
                        Total de carboidratos:{' '}
                    </label>
                    <input
                        className="input"
                        placeholder="exemplo: 300"
                        type="number"
                        onChange={onChangeAmountHc}
                        value={amountHc}
                        required
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
                <Dropbox
                    label="Terapia"
                    titleDropbox={titleDropboxTherapy}
                    setTitleDropbox={setTitleDropboxTherapy}
                    dataToShowInDropbox={therapyGlobal}
                    field="type"
                    setIdReturnedFromDropBox={setIdReturnedFromDropBoxTherapy}
                />
                <div className="item-form">
                    <label htmlFor="amountGlucose">
                        Tempo de exercicio fisico:
                    </label>
                    <input
                        className="input"
                        placeholder="em minutos"
                        type="number"
                        onChange={onChangeTimeExercise}
                        value={timeExercise}
                    />
                </div>
                <Button onClick={handleCalcular}>Calcular</Button>
                <Button onClick={handleSubmit}>Salvar</Button>
            </FormContent>

            <Modal
                modal={modal}
                toggleModal={toggleModal}
                amountInsulinCorrection={amountInsulinCorrection}
                amountInsulinHc={amountInsulinHc}
                amountInsulinTotal={amountInsulinTotal}
                handleSubmit={handleSubmit}
            />
        </>
    )
}
