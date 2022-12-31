import axios from 'axios'
import { host } from './host'

export function updateProfile(valuesToUpdate) {
    return new Promise(async (resolve, reject) => {
        try {
            let response = await axios.post(
                `http://${host}:3000/api/user/updateprofile`,
                valuesToUpdate,
                {
                    headers: {
                        'x-access-token': localStorage.getItem('token')
                    }
                }
            )
            localStorage.setItem('token', response.data)
            return resolve(response)
        } catch (error) {
            return reject(error)
        }
    })
}

export function deleteUser(state) {
    return new Promise(async (resolve, reject) => {
        try {
            let response = await axios.post(
                `http://${host}:3000/api/user/deleteUser`,
                state,
                {
                    headers: {
                        'x-access-token': localStorage.getItem('token')
                    }
                }
            )
            localStorage.removeItem('token', response.data)
            return resolve(response)
        } catch (error) {
            return reject(error)
        }
    })
}

export function getAllRegisters() {
    return new Promise(async (resolve, reject) => {
        try {
            let response = await axios.post(
                `http://${host}:3000/api/user/getallregisters`,
                {},
                {
                    headers: {
                        'x-access-token': localStorage.getItem('token')
                    }
                }
            )
            return resolve(response)
        } catch (error) {
            return reject(error)
        }
    })
}
