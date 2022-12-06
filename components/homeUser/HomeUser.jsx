import { React, useContext, useEffect } from 'react'
import styled from 'styled-components'
import { signin, getCurrentUser } from '../../services/service.auth'
import { GlobalContext } from '../../context/GlobalContext'

export default function User() {
    const { setUserGlobal } = useContext(GlobalContext)

    useEffect(() => {
        getCurrentUser().then((user) => {
            setUserGlobal(user.data.user)
        })
    }, [])

    return (
        <div className="flex-grow grid">
            <div>um</div>
            <div>dois</div>
            <div>tres</div>
            <div>quatro</div>

            {/*             <div
                className="box-content grid-cols-1 flex-auto sm:h-32  p-1  xl:w-60 bg-blue-900 rounded-lg  absolute bottom-96 left-96"
            >
                <h1 className="font-semibold text-slate-50 mt-4 mr-10 ml-2">
                    Não se esqueaça de registar os dados da glicose de hoje!
                </h1>
            </div>
            <img
                className="hidden w-72 lg:block absolute bottom-0 right-0"
                src="/images/4435922.jpg"
            /> */}
        </div>
    )
}
