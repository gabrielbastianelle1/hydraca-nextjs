import React, { useState } from 'react'
import { signin } from '../../services/service.auth'
import useRouter from 'next/router'
import Button from '../Button'
import { userAgent } from 'next/server'
export default function Form() {
    const navigate = useRouter
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
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
    const [showPassword, setShowPassword] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()
        await signin(email, password)
        navigate.push('/user')

        /*    try {
            await authService.signin(email, password)
        } catch (error) {
            console.log(error)
        }
        try {
            let response = await authService.getCurrentUser()
            console.log(response.data.user.role)
            if (response.data.user.role === 'user') {
                navigate.push('/user')
                return
            }
            navigate.push('/admin')
        } catch (error) {
            console.log(error)
        }
        // navigate.push('/user')
        */
    }
    return (
        <div>
            <form action="/send-data-here" className="form" method="POST">
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
            </form>
        </div>
    )
}
