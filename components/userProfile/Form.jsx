import React, { useState, useContext, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import Button from '../Button'
import Dropbox from '../Dropbox'
import FormContent from '../Form.styled'
import { signin, getCurrentUser } from '../../services/service.auth'
import Axios from 'axios'
import { RESPONSE_LIMIT_DEFAULT } from 'next/dist/server/api-utils'

export default function Form() {
    const [user, setUser] = useState({})

    getCurrentUser().then((user) => setUser(user.data.user))

    return (
        <section>
            <div>
                {user.map((value, index) => {
                    return <h1> Nome:{value} </h1>
                })}
            </div>
        </section>
    )
}
