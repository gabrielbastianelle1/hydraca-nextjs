import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { signup } from '../../services/service.auth'
import Button from '../Button'
import FormContent from '../Form.styled'

export default function Form() {
    const router = useRouter()
    const [name, setName] = useState('')
    const [birthday, setBirthday] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const [message, setMessage] = useState({
        active: false,
        error: false,
        message: ''
    })

    const onChangeName = (e) => {
        setName(e.target.value)
    }

    const onChangeBirthday = (e) => {
        setBirthday(e.target.value)
    }

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const onChangeConfirm = (e) => {
        setConfirm(e.target.value)
    }

    const checkIfPasswordIsEmpty = (password) => {
        if (password.length == 0) {
            return true
        }
        return false
    }

    async function handleSubmit(e) {
        e.preventDefault()

        if (checkIfPasswordIsEmpty(password)) {
            setMessage({
                active: true,
                error: true,
                message: 'Palavra-passe não pode estar vazia'
            })
            return
        }

        if (password !== confirm) {
            setMessage({
                active: true,
                error: true,
                message: '  Confirme a palavra-passe'
            })
            return
        }

        try {
            await signup(name, password, email, birthday)

            router.push('/welcome')
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
            <FormContent
                active={message.active}
                error={message.error}
                message={message.message}
                className="form"
            >
                <div className="item-form">
                    <label htmlFor="name">Nome: </label>
                    <input
                        id="name"
                        placeholder="nome completo"
                        onChange={onChangeName}
                        value={name}
                        className="input"
                    />
                </div>
                <div className="item-form">
                    <label htmlFor="birthday">Data de nascimento: </label>
                    <input
                        id="birthday"
                        placeholder="YYYY-MM-DD"
                        onChange={onChangeBirthday}
                        value={birthday}
                        className="input"
                    />
                </div>
                <div className="item-form">
                    <label htmlFor="email">Email: </label>
                    <input
                        id="email"
                        placeholder="mail@mail.com"
                        onChange={onChangeEmail}
                        value={email}
                        className="input"
                    />
                </div>
                <div className="item-form">
                    <label htmlFor="password">Senha: </label>
                    <input
                        id="password"
                        placeholder="senha"
                        type="password"
                        onChange={onChangePassword}
                        value={password}
                        className="input"
                    />
                </div>
                <div className="item-form">
                    <label htmlFor="name">Confimar senha: </label>
                    <input
                        placeholder="senha"
                        type="password"
                        onChange={onChangeConfirm}
                        value={confirm}
                        className="input"
                    />
                </div>
                <Button onClick={handleSubmit}>Criar Conta</Button>
            </FormContent>
        </div>
    )
}
