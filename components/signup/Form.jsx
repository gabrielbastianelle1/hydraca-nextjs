import { useRouter } from 'next/router'
import React, { useState, useContext } from 'react'
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
                message: 'O campo não pode estar vazio'
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
                <label htmlFor="name">Nome</label>
                <input
                    id="name"
                    placeholder="Full name"
                    onChange={onChangeName}
                    value={name}
                    className="input"
                />
                <label htmlFor="birthday">Data de nascimento</label>
                <input
                    id="birthday"
                    placeholder="YYYY-MM-DD"
                    onChange={onChangeBirthday}
                    value={birthday}
                    className="input"
                />
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    placeholder="mail@mail.com"
                    onChange={onChangeEmail}
                    value={email}
                    className="input"
                />
                <label htmlFor="name">Palavra-passe</label>
                <input
                    id="password"
                    placeholder="password"
                    type="password"
                    onChange={onChangePassword}
                    value={password}
                    className="input"
                />
                <label htmlFor="name">Confirmar palavra-passe</label>
                <input
                    placeholder="password"
                    type="password"
                    onChange={onChangeConfirm}
                    value={confirm}
                    className="input"
                />
                <Button onClick={handleSubmit}>Criar Conta</Button>
            </FormContent>
        </div>
    )
}
