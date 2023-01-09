import { React, useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import Button from '../Button'
import FormContent from '../Form.styled'
import { updateProfile, deleteUser } from '../../services/service.user'
import Dropbox from '../Dropbox'
import { getCurrentUser } from '../../services/service.auth'
import useRouter from 'next/router'
import Modal from './Modal'

export default function Form() {
    const [user, setUser] = useState({})

    const { diabetesGlobal } = useContext(GlobalContext)
    const navigate = useRouter
    useEffect(() => {
        getCurrentUser()
            .then((response) => setUser(response.data.user))
            .catch((error) => console.log(error))
    }, [])

    const [name, setName] = useState(user.name)
    const [height, setHeight] = useState(user.height)
    const [weight, setWeight] = useState(user.weight)
    const [sensitivity, setSensitivity] = useState(user.sensitivity)
    const [birthday, setBirthday] = useState(user.birthday)
    const [password, setPassword] = useState(user.password)
    const [email, setEmail] = useState(user.email)
    const [state, setState] = useState(user.state)
    const [titleDropbox, setTitleDropbox] = useState('Selecione')
    const [modal, setModal] = useState(false)
    const [idReturnedFromDropBox, setIdReturnedFromDropBox] = useState(
        user.idDiabetes
    )
    const [message, setMessage] = useState({
        active: false,
        error: false,
        message: ''
    })

    const onChangeName = (event) => {
        setName(event.target.value)
    }

    const onChangeHeight = (event) => {
        setHeight(event.target.value)
    }

    const onChangeWeight = (event) => {
        setWeight(event.target.value)
    }

    const onChangeSensitivity = (event) => {
        setSensitivity(event.target.value)
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const onChangeBirthday = (event) => {
        setBirthday(event.target.value)
    }

    const handleSubmit = async () => {
        try {
            await updateProfile({
                name: name,
                weight: weight,
                height: height,
                sensitivity: sensitivity,
                birthday: birthday,
                password: password,
                idDiabetes: idReturnedFromDropBox
            })
            setMessage({
                active: true,
                error: false,
                message: 'O Perfil foi atualizado com sucesso!'
            })
        } catch (error) {
            console.log(error.response.data)
        }
    }
    const toggleModal = () => {
        setModal(false)
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

    return (
        <>
            <FormContent
                active={message.active}
                error={message.error}
                message={message.message}
                className="form lg:grid-cols-2 lg:grid-rows-6 gap-x-4 gap-y-16 lg:gap-y-4"
            >
                <div className="item-form lg:col-span-2 ">
                    <label htmlFor="name">Nome: </label>
                    <input
                        id="name"
                        placeholder={user.name}
                        onChange={onChangeName}
                        value={name}
                        className="input placeholder-gray-600"
                    />
                </div>

                <div className="item-form lg:col-span-2 disabled">
                    <label htmlFor="email">Email: </label>
                    <input
                        placeholder={user.email}
                        value={email}
                        className="input placeholder-gray-800"
                        disabled
                    />
                </div>
                <div className="item-form">
                    <label htmlFor="name">Nascimento: </label>
                    <input
                        id="birthday"
                        placeholder={user.birthday}
                        onChange={onChangeBirthday}
                        value={birthday}
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
                        value={height}
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
                        value={weight}
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
                <button onClick={handleDelete} className="text-red-600 ">
                    Excluir conta
                </button>
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
        </>
    )
}
