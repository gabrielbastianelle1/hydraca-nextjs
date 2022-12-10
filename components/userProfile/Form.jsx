import { React, useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import Button from '../Button'
import FormContent from '../Form.styled'
import { updateProfile } from '../../services/service.user'
import Dropbox from '../Dropbox'
import { getCurrentUser } from '../../services/service.auth'

export default function Form() {
    const [user, setUser] = useState({})
    const { diabetesGlobal } = useContext(GlobalContext)

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

    const [titleDropbox, setTitleDropbox] = useState('Selecione')
    const [idReturnedFromDropBox, setIdReturnedFromDropBox] = useState(
        user.idDiabetes
    )

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
    const onChangeEmail = (event) => {
        setEmail(event.target.value)
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
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <FormContent className="form lg:grid-cols-2 lg:grid-rows-7 gap-x-4 gap-y-16 lg:gap-y-4">
            <div className="item-form lg:col-span-2">
                <label htmlFor="name">Nome: </label>
                <input
                    id="name"
                    placeholder={user.name}
                    onChange={onChangeName}
                    value={name}
                    className="input"
                />
            </div>

            <div className="item-form lg:col-span-2">
                <label htmlFor="email">Email: </label>
                <input
                    id="email"
                    placeholder={user.email}
                    onChange={onChangeEmail}
                    value={email}
                    className="input"
                />
            </div>

            <div className="item-form lg:col-span-2">
                <label htmlFor="password">Password: </label>
                <input
                    id="password"
                    type="password"
                    onChange={onChangePassword}
                    value={password}
                    className="input"
                />
            </div>

            <div className="item-form">
                <label htmlFor="name">Data de nascimento: </label>
                <input
                    id="birthday"
                    placeholder={user.birthday}
                    onChange={onChangeBirthday}
                    value={birthday}
                    className="input"
                />
            </div>
            <div className="item-form">
                <label htmlFor="height">Altura: </label>
                <input
                    id="height"
                    type="number"
                    placeholder={user.height}
                    onChange={onChangeHeight}
                    value={height}
                    className="input"
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
                    className="input"
                />
            </div>
            <div className="item-form">
                <label htmlFor="sensitivity">Sensibilidade: </label>
                <input
                    id="sensitivity"
                    type="number"
                    placeholder={user.sensitivity}
                    onChange={onChangeSensitivity}
                    value={sensitivity}
                    className="input"
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
            <button className="text-red-600 row-span-2 self-end">
                Excluir conta
            </button>
            <Button onClick={handleSubmit}>Salvar</Button>
        </FormContent>
    )
}
