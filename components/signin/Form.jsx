import React, { useState } from 'react'
import { signin, getCurrentUser } from '../../services/service.auth'
import useRouter from 'next/router'
import Button from '../Button'
import { userAgent } from 'next/server'
import FormContent from '../Form.styled'

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
                message: 'Palavra-passe incorreta'
            })
            return
        }

        try {
            await signin(email, password)
            let response = await getCurrentUser()

            if (response.data.user.role === 'user') {
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
                action="/send-data-here"
                active={message.active}
                error={message.error}
                message={message.message}
                className="form"
                method="POST"
            >
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    autoComplete="email"
                    placeholder="mail@mail.com"
                    onChange={onChangeEmail}
                    value={email}
                    className="input"
                    required
                    pattern="@"
                />
                <label htmlFor="password">Palavra-Passe</label>
                <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="password"
                    onChange={onChangePassword}
                    value={password}
                    className="input "
                    required
                />
                <div>
                    <label
                        onClick={() => setShowPassword(!showPassword)}
                        className="bg-blue-700 hover:bg-gray-400 rounded px-2 py-1 text-sm text-white font-mono cursor-pointer "
                        htmlFor="toggle"
                    >
                        {showPassword ? 'hide' : 'show'}
                    </label>
                </div>
                <Button onClick={handleSubmit}>Iniciar Sessão</Button>
            </FormContent>
        </div>
    )
}
