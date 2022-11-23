import React, { useState } from 'react'
import authService from '../../pages/services/authUser'
import  useRouter from 'next/router'

export default function Form() {

    const navigate = useRouter;
    /*--COLOCCAR O HIDE E SHOw DENTRO DO UINPUT, NÃO CONSEGUI :')*/
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




    async function handleSubmit(e){
               e.preventDefault()


                await authService.signin(email, password)
                navigate.push('/pages/api/user/index')
        }






 return(
        <div>
            <form action="/send-data-here" className="flex flex-col px-10 w-full md:w-2/3 md:px-0 lg:max-w-xl mx-auto" method="POST">

                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    autoComplete="email"
                    placeholder="mail@mail.com"
                    onChange={onChangeEmail}
                    value={email}
                    className="input"
                    required
                    pattern='@'
                />
                <label htmlFor="password">Palavra-Passe</label>

                <input type={showPassword ? 'text' : 'password'}
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
                htmlFor="toggle">
                    {showPassword ? 'hide' : 'show'}</label>
                </div>

                <button onClick={handleSubmit}
                    className="mt-5 p-3 bg-colorButton rounded-xl text-white "
                >
                    Iniciar sessão
                </button>
            </form>
        </div>

)

}