import { React, useState, useContext, useEffect } from 'react'
import Button from '../Button'
import FormContent from '../Form.styled'
import { updateProfile } from '../../services/service.user'
import { User, PopUp } from '../svgs/index'
import { getCurrentUser } from '../../services/service.auth'
import { format } from 'date-fns'

export default function Form() {
    const [user, setUser] = useState({})
    format(new Date(), 'yyyy/mm/dd')
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
    const [email, setEmail] = useState(user.email)

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
        setEma(event.target.value)
    }

    const onChangeBirthday = (event) => {
        setBirthday(event.target.value)
    }

    const handleSubmit = async (event) => {
        try {
            await updateProfile({
                name: name,
                weight: weight,
                height: height,
                sensitivity: sensitivity,
                birthday: birthday
            })
        } catch (error) {
            console.log(error.response.data)
        }
    }

    return (
        <section>
            <div className=" place-items-center justify-center content-start flex grid-col-2  left-72 pt-20  grid-cols-6">
                <h1 className="  text-3xl pt-4  text-indigo-900">PERFIL</h1>
                <User className="grid " />
            </div>

            <FormContent>
                <div className="grid-cols-1 grid-rows-9 grid-y-4 px-72 justify-center grid ">
                    <label htmlFor="name">Nome completo:</label>
                    <input
                        name="name"
                        id="name"
                        className="input placeholder-black
                          py-1 bg-transparent border-0 border-b-2 border-indigo-900"
                        onChange={onChangeName}
                        placeholder={user.name}
                        value={name}
                        type="text"
                    />

                    <label htmlFor="email">Email</label>
                    <input
                        className="bg-transparent border-0 border-b-2 border-indigo-900"
                        value={user.email}
                    />
                </div>
                <div className="grid-cols-1 grid-rows-9 grid-y-4 px-72 justify-center grid ">
                    <label htmlFor="name">Sensitivity:</label>
                    <input
                        name="name"
                        id="name"
                        className="input placeholder-black
                        bg-transparent border-0 border-b-2 border-indigo-900"
                        onChange={onChangeSensitivity}
                        placeholder={user.sensitivity}
                        value={sensitivity}
                        type="text"
                    />

                    <label htmlFor="date">Data de nascimento:</label>
                    <input
                        type="Date"
                        name="date"
                        id="birthday"
                        className="input py-1 bg-transparent border-0 border-b-2 border-indigo-900"
                        onChange={onChangeBirthday}
                        placeholder={user.birthday}
                        value={birthday}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2  space-y-1 ">
                        <label htmlFor="height">Altura:</label>
                        <input
                            type="number"
                            name="height"
                            id="height"
                            className="input py-1 order-3 bg-transparent border-0 border-b-2 border-indigo-900"
                            value={user.height}
                            placeholder={height}
                            onChange={onChangeHeight}
                        />

                        <label htmlFor="weight">Peso:</label>
                        <input
                            type="number"
                            name="weight"
                            id="weight"
                            className="input py-1 order-4 bg-transparent border-0 border-b-2 border-indigo-900"
                            value={user.weight}
                            placeholder={weight}
                            onChange={onChangeWeight}
                        />
                    </div>

                    <Button onClick={handleSubmit}>Salvar</Button>
                </div>
            </FormContent>
            <div className="scale-90 sm:absolute -bottom-4   -right-2">
                <PopUp />
            </div>
        </section>
    )
}
