import React, { useState } from 'react'

export default function Form() {

    /*--COLOCCAR O HIDE E SHOR DENTRO DO UINPUT, NÃO CONSEGUI :')*/
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
    const [showPassword, setShowPassword]
        = useState(false)



    return (
        <div>
            <form className="flex flex-col px-10 w-full md:w-2/3 md:px-0 lg:max-w-xl mx-auto">

                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    placeholder="mail@mail.com"
                    onChange={onChangeEmail}
                    value={email}
                    className="input"
                />
                <label htmlFor="password">Palavra-Passe</label>

                <input type={showPassword ? 'text' : 'password'}
                       placeholder="password"
                       onChange={onChangePassword}
                       value={password}
                       className="input "
                />


                <div>
                <label
                onClick={() => setShowPassword(!showPassword)}
                className="bg-blue-700 hover:bg-gray-400 rounded px-2 py-1 text-sm text-white font-mono cursor-pointer "
                htmlFor="toggle">
                    {showPassword ? 'hide' : 'show'}</label>
                </div>

                <button className="mt-5 p-3 bg-colorButton rounded-xl text-white">
                    Iniciar sessão
                </button>
            </form>
        </div>
    )
}
