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
            console.log(response.data)
            localStorage.setItem('token', response.data)
            return resolve(response)
        } catch (error) {
            console.log(error)
            return reject(error)
        }
    })
}

export function registerBasal() {
    return new Promise(async (resolve, reject) => {
        try {
            let response = await axios.post(
                'http://localhost:3000/api/user/registerbasal',
                {
                    headers: {
                        'x-access-token': localStorage.getItem('token')
                    }
                }
            )
            console.log(response.data)
            localStorage.setItem('token', response.data)
            return resolve(response)
        } catch (error) {
            console.log(error)
            return reject(error)
        }
    })
}
