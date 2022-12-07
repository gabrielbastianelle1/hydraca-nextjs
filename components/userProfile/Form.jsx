import { React, useState, useContext, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import Button from '../Button'
import FormContent from '../Form.styled'
import { updateProfile } from '../../services/service.user'
import { User, PopUp } from '../svgs/index'

export default function Form() {
    const { userGlobal, setUserGlobal } = useContext(GlobalContext)

    const [name, setName] = useState(userGlobal.name)
    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)

    const onChangeName = (event) => {
        setName(event.target.value)
    }

    const onChangeHeight = (event) => {
        setHeight(event.target.value)
    }

    const onChangeWeight = (event) => {
        setWeight(event.target.value)
    }

    const handleSubmit = async (event) => {
        try {
            const data = await updateProfile({
                name: name
            })

            let userUpdated = data.data

            setUserGlobal(userUpdated)
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
                        placeholder={userGlobal.name}
                        value={name}
                        type="text"
                    />
                    {/*<label htmlFor="email">Email</label>
            <input class='bg-transparent border-0 border-b-2 border-indigo-900' value={user.email} />
        <label htmlFor="date">Data de nascimento:</label>
            <input
             type="date"
             name="date"
             id="birthday"
             className="input py-1 bg-transparent border-0 border-b-2 border-indigo-900"
             //onChange={onChangeBirthday}
             //placeholder={user.birthday}
             value={user.birthday}

             />

        <label htmlFor="name">Palavra-passe:</label>
            <input
             //type="password"
             //id="password"
             className="input py-1 bg-transparent border-0 border-b-2 border-indigo-900"
             //onChange={onChangePassword}
             placeholder= "password"
             //value={user.password}

             />

             <div className='grid grid-cols-1 md:grid-cols-2 gap-2  space-y-1 '>
                <label htmlFor="height">Altura:</label>
                 <input
                    type="number"
                    name="height"
                    id="height"
                    className="input py-1 order-3 bg-transparent border-0 border-b-2 border-indigo-900"
                    value={user.height}
                    placeholder={user.height}
                    onChange={onChangeHeight}

                />

                <label htmlFor="weight">Peso:</label>
                <input
                    type="number"
                    name="weight"
                    id="weight"
                    className="input py-1 order-4 bg-transparent border-0 border-b-2 border-indigo-900"
                    value={user.weight}
                    placeholder={user.weight}
                    onChange={onChangeWeight}
                /></div>
*/}
                    <Button onClick={handleSubmit}>Salvar</Button>
                </div>
            </FormContent>
            <div className="scale-90 sm:absolute -bottom-4   -right-2">
                <PopUp />
            </div>
        </section>
    )
}
