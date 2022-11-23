import React, { useState } from 'react'

export default function Form() {
    const [name, setName] = useState('')
    const [birthday, seBirthday] = useState('')
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
        seBirthday(e.target.value)
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

    return (
        <div>
            <form className="flex flex-col px-10 w-full md:w-2/3 md:px-0 lg:max-w-xl mx-auto">
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    placeholder="Full name"
                    onChange={onChangeName}
                    value={name}
                    className="input"
                />
                <label htmlFor="birthday">Birthday</label>
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
                <label htmlFor="name">Password</label>
                <input
                    id="password"
                    placeholder="password"
                    type="password"
                    onChange={onChangePassword}
                    value={password}
                    className="input"
                />
                <label htmlFor="name">Confirm Password</label>
                <input
                    placeholder="password"
                    type="password"
                    onChange={onChangeConfirm}
                    value={confirm}
                    className="input"
                />
                <button className="mt-5 p-3 bg-colorButton rounded-xl text-white">
                    Send
                </button>
            </form>
        </div>
    )
}
