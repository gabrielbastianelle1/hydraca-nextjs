import React, { useState } from 'react'
import { signin, getCurrentUser } from '../../services/service.auth'
import useRouter from 'next/router'
import Button from '../Button'
import FormContent from '../Form.styled'
import 'animate.css'

export default function Form() {
    const navigate = useRouter
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [message, setMessage] = useState({
        active: false,
        error: false,
        message: ''
    })

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    async function handleSubmit(e) {
        e.preventDefault()

        if (password.length === 0) {
            setMessage({
                active: true,
                error: true,
                message: 'Campo senha vazio'
            })
            return
        }

        if (email.length === 0) {
            setMessage({
                active: true,
                error: true,
                message: 'Campo email vazio'
            })
            return
        }
        try {
            await signin(email, password)
            let response = await getCurrentUser()

            const userData = response.data.user

            if (userData.role === 'user') {
                navigate.push('/user')
                return
            } else navigate.push('/admin')
        } catch (error) {
            setMessage({
                active: true,
                error: true,
                message: error.response.data
            })
            return
        }
    }

    return (
        <div>
            <FormContent
                active={message.active}
                error={message.error}
                message={message.message}
                className="form  animate__animated animate__backInDown"
            >
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
                        type={showPassword ? 'text' : 'password'}
                        placeholder="senha"
                        onChange={onChangePassword}
                        value={password}
                        className="input "
                    />
                </div>
                <div></div>
                <Button onClick={handleSubmit}>Iniciar Sessão</Button>
            </FormContent>
        </div>
    )
}
