import { React, useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import Button from '../Button'
import FormContent from '../Form.styled'
import { updateProfile, deleteUser } from '../../services/service.user'
import Dropbox from '../Dropbox'
import { getCurrentUser } from '../../services/service.auth'
import useRouter from 'next/router'
import Modal from './Modal'
import ModalPassword from './ModalPassword'
import { calcImc } from '../welcome/calcimc'

export default function Form() {
    const [user, setUser] = useState(undefined)

    const { diabetesGlobal, therapyGlobal } = useContext(GlobalContext)

    const navigate = useRouter
    useEffect(() => {
        getCurrentUser()
            .then((response) => {
                setUser(response.data.user)
                return response.data.user
            })
            .then((response) => {
                setTitleDropbox(getDiabatesName(response))
                setGlucoseMin(response.glucoserange[0])
                setGlucoseMax(response.glucoserange[1])
                return response
            })
            .then((response) => {
                setTitleDropBoxTherapy(getTherapyName(response))
            })
    }, [diabetesGlobal, therapyGlobal])

    const [name, setName] = useState(undefined)
    const [height, setHeight] = useState(undefined)
    const [weight, setWeight] = useState(undefined)
    const [sensitivity, setSensitivity] = useState(undefined)
    const [birthday, setBirthday] = useState(undefined)
    const [glucoseMin, setGlucoseMin] = useState(undefined)
    const [glucoseMax, setGlucoseMax] = useState(undefined)
    const [password, setPassword] = useState('testani')
    const [confirm, setConfirm] = useState('')
    const [email, setEmail] = useState(undefined)
    const [imc, setImc] = useState(undefined)
    const [state, setState] = useState(undefined)
    const [titleDropbox, setTitleDropbox] = useState(undefined)
    const [modal, setModal] = useState(false)
    const [modalPassword, setModalPassword] = useState(false)
    const [titleDropBoxTherapy, setTitleDropBoxTherapy] = useState(undefined)
    const [idReturnedFromDropBoxTherapy, setIdReturnedFromDropBoxTherapy] =
        useState(undefined)
    const [idReturnedFromDropBox, setIdReturnedFromDropBox] =
        useState(undefined)
    const [message, setMessage] = useState({
        active: false,
        error: false,
        message: ''
    })

    function getDiabatesName(user) {
        let diabetesName

        diabetesGlobal.forEach((element) => {
            if (element._id == user.idDiabetes) {
                diabetesName = element.type
            }
        })

        return diabetesName
    }

    function getTherapyName(user) {
        let therapyName

        therapyGlobal.forEach((element) => {
            if (element.type == user.therapy) {
                therapyName = element.type
            }
        })

        return therapyName
    }

    const onChangeName = (event) => {
        setName(event.target.value)
    }

    const onChangeHeight = (event) => {
        setHeight(event.target.value)
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const onChangeWeight = (event) => {
        setWeight(event.target.value)
    }

    const onChangeSensitivity = (event) => {
        setSensitivity(event.target.value)
    }

    const onChangeBirthday = (event) => {
        setBirthday(event.target.value)
    }

    const onChangeMin = (event) => {
        setGlucoseMin(event.target.value)
    }

    const onChangeMax = (event) => {
        setGlucoseMax(event.target.value)
    }

    const onChangeConfirm = (event) => {
        setConfirm(event.target.value)
    }

    const toggleModal = () => {
        setModal(false)
    }
    const toggleModalPassword = () => {
        setModalPassword(false)
    }

    const checkIfPasswordIsEmpty = (password) => {
        if (password.length == 0) {
            return true
        }
        return false
    }

    const getImc = () => {
        let imc
        if (height && weight) {
            imc = calcImc(weight, height)
            return imc
        }

        if (!height && !weight) {
            imc = calcImc(user.weight, user.height)
            return imc
        }

        if (!weight) {
            imc = calcImc(user.weight, height)
            return imc
        }

        if (!height) {
            imc = calcImc(weight, user.height)
            return imc
        }
    }

    const handleSubmit = async () => {
        if (checkRangeGlucose()) {
            setMessage({
                active: true,
                error: true,
                message: 'Gligose minima nao pode ser maior que a maxima'
            })
            return
        }

        try {
            await updateProfile({
                name: name,
                weight: weight,
                height: height,
                sensitivity: sensitivity,
                birthday: birthday,
                glucoserange: [parseFloat(glucoseMin), parseFloat(glucoseMax)],
                imc: getImc(),
                idDiabetes: idReturnedFromDropBox,
                therapy: idReturnedFromDropBoxTherapy
            })

            setMessage({
                active: true,
                error: false,
                message: 'O Perfil foi atualizado com sucesso!'
            })

            navigate.push('/user')
        } catch (error) {
            console.log(error.response.data)
        }
    }

    const handleDelete = async (event) => {
        event.preventDefault()
        setModal(true)
    }

    const handleDeleteUser = async () => {
        try {
            await deleteUser({ state: state })
            navigate.push('/')
        } catch (error) {
            setMessage({
                active: true,
                error: true,
                message: error.response.data
            })
        }
    }

    const handleSubmits = async (event) => {
        event.preventDefault()
        setModalPassword(true)
    }

    const checkRangeGlucose = () => {
        if (glucoseMin >= glucoseMax) {
            return true
        }
    }

    const handleSubmitPassword = async (event) => {
        event.preventDefault()
        if (password == '') {
            setMessage({
                active: true,
                error: true,
                message: 'A senha não pode estar vazia'
            })
            return
        }

        try {
            await updateProfile({ password: password })
            console.log(password)
            navigate.push('/user')
        } catch (error) {
            setMessage({
                active: true,
                error: true,
                message: error.response.data
            })
        }
    }

    if (user === undefined) {
        return <div>loading</div>
    }

    return (
        <>
            <FormContent
                active={message.active}
                error={message.error}
                message={message.message}
                className="form lg:grid-cols-2 lg:grid-rows-6  gap-y-16 lg:gap-y-6 gap-x-4"
            >
                <div className="item-form">
                    <label htmlFor="name">Nome: </label>
                    <input
                        id="name"
                        placeholder={user.name}
                        onChange={onChangeName}
                        value={name}
                        className="input placeholder-gray-600"
                    />
                </div>
                <div className="item-form disabled">
                    <label htmlFor="email">Email: </label>
                    <input
                        placeholder={user.email}
                        value={email}
                        className="input placeholder-gray-800"
                        disabled
                    />
                </div>
                <div className="item-form">
                    <label htmlFor="password">Password: </label>
                    <button
                        className=" bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold py-1 px-20 rounded inline-flex items-center"
                        onClick={handleSubmits}
                    >
                        <span>Alterar senha</span>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M17.204 10.796L19 9C19.5453 8.45475 19.8179 8.18213 19.9636 7.88803C20.2409 7.32848 20.2409 6.67153 19.9636 6.11197C19.8179 5.81788 19.5453 5.54525 19 5C18.4548 4.45475 18.1821 4.18213 17.888 4.03639C17.3285 3.75911 16.6715 3.75911 16.112 4.03639C15.8179 4.18213 15.5453 4.45475 15 5L13.1814 6.81866C14.1452 8.46926 15.5314 9.84482 17.204 10.796ZM11.7269 8.27312L4.8564 15.1436C4.43134 15.5687 4.21881 15.7812 4.07907 16.0423C3.93934 16.3034 3.88039 16.5981 3.7625 17.1876L3.1471 20.2646C3.08058 20.5972 3.04732 20.7635 3.14193 20.8581C3.23654 20.9527 3.40284 20.9194 3.73545 20.8529L6.81243 20.2375C7.40189 20.1196 7.69661 20.0607 7.95771 19.9209C8.21881 19.7812 8.43134 19.5687 8.8564 19.1436L15.7458 12.2542C14.1241 11.2386 12.7524 9.87628 11.7269 8.27312Z"
                                fill="#222222"
                            />
                        </svg>
                    </button>
                </div>
                <div className="item-form">
                    <label htmlFor="name">Nascimento: </label>
                    <input
                        id="birthday"
                        max={new Date().toISOString().split('T')[0]}
                        placeholder={user.birthday}
                        onChange={onChangeBirthday}
                        value={birthday}
                        className="input w-1/5 placeholder-gray-600"
                    />
                </div>
                <div className="item-form ">
                    <label htmlFor="minglucose">Glicose minima: </label>
                    <input
                        id="minglucose"
                        type="number"
                        min={user.glucoserange[1]}
                        placeholder={user.glucoserange[0]}
                        onChange={onChangeMin}
                        className="input w-1/5 placeholder-gray-600"
                    />
                </div>
                <div className="item-form ">
                    <label htmlFor="maxglucose">Glicose maxima: </label>
                    <input
                        id="maxglucose"
                        type="number"
                        min={user.glucoserange[0]}
                        placeholder={user.glucoserange[1]}
                        onChange={onChangeMax}
                        className="input w-1/5 placeholder-gray-600"
                    />
                </div>
                <div className="item-form ">
                    <label htmlFor="height">Altura: </label>
                    <input
                        id="height"
                        type="number"
                        placeholder={user.height}
                        onChange={onChangeHeight}
                        className="input placeholder-gray-600"
                    />
                </div>
                <div className="item-form">
                    <label htmlFor="weight">Peso: </label>
                    <input
                        id="weight"
                        type="number"
                        placeholder={user.weight}
                        onChange={onChangeWeight}
                        className="input placeholder-gray-600"
                    />
                </div>
                <div className="item-form ">
                    <label htmlFor="sensitivity">Sensibilidade: </label>
                    <input
                        id="sensitivity"
                        type="number"
                        placeholder={user.sensitivity}
                        onChange={onChangeSensitivity}
                        value={sensitivity}
                        className="input w-1/5 placeholder-gray-600"
                    />
                </div>
                <Dropbox
                    label="Diabetes"
                    titleDropbox={titleDropbox}
                    setTitleDropbox={setTitleDropbox}
                    dataToShowInDropbox={diabetesGlobal}
                    field="type"
                    setIdReturnedFromDropBox={setIdReturnedFromDropBox}
                />
                <Dropbox
                    label="Terapia"
                    titleDropbox={titleDropBoxTherapy}
                    setTitleDropBox={setTitleDropBoxTherapy}
                    dataToShowInDropbox={therapyGlobal}
                    field="type"
                    setIdReturnedFromDropBox={setIdReturnedFromDropBoxTherapy}
                />
                <div>
                    <button onClick={handleDelete} className="text-red-600">
                        Excluir conta
                    </button>
                </div>

                <div className="lg:col-span-2 justify-self-center w-full lg:w-1/2">
                    <Button className="w-full" onClick={handleSubmit}>
                        Salvar
                    </Button>
                </div>
            </FormContent>
            <Modal
                modal={modal}
                toggleModal={toggleModal}
                handleDeleteUser={handleDeleteUser}
            />

            <ModalPassword
                modalPassword={modalPassword}
                toggleModalPassword={toggleModalPassword}
                handleSubmitPassword={handleSubmitPassword}
                onChangePassword={onChangePassword}
                value={password}
            />
        </>
    )
}
