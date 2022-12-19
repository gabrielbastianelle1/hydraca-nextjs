import axios from 'axios'

export function updateProfile(valuesToUpdate) {
    return new Promise(async (resolve, reject) => {
        try {
            let response = await axios.post(
                'http://localhost:3000/api/user/updateprofile',
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
                'http://localhost:3000/api/user/deleteUser',
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
