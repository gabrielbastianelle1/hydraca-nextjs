import React, { useState, useContext, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import Button from '../Button'
import Dropbox from '../Dropbox'
import FormContent from '../Form.styled'
import { getCurrentUser } from '../../services/service.auth'

export default function Form() {
    const [user, setUser] = useState({})

    getCurrentUser().then((user) => setUser(user.data.user))

    return (
        <section>
            <FormContent>
                <label htmlFor="name">Name</label>
                <input id="name" placeholder={user.name} className="input" />
                <Button>Salvar</Button>
            </FormContent>
        </section>
    )
}
