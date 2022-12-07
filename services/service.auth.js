import axios from 'axios'

export function signup(name, password, email, birthday) {
    return new Promise(async (resolve, reject) => {
        try {
            let response = await axios.post(
                'http://localhost:3000/api/signup',
                {
                    name: name,
                    password: password,
                    email: email,
                    birthday: birthday,
                    role: 'user'
                }
            )
            localStorage.setItem('token', response.data)
            return resolve(response.data)
        } catch (error) {
            console.log(error)
            return reject(error)
        }
    })
}

export function signin(email, password) {
    return new Promise(async (resolve, reject) => {
        try {
            let response = await axios.post(
                'http://localhost:3000/api/signin',
                {
                    email: email,
                    password: password
                }
            )
            localStorage.setItem('token', response.data)
            return resolve(response.data)
        } catch (error) {
            return reject(error)
        }
    })
}

export function logout() {
    localStorage.removeItem('token')
}

export async function getCurrentUser() {
    const response = await axios.get(
        'http://localhost:3000/api/user',

        {
            headers: {
                'x-access-token': localStorage.getItem('token')
            }
        }
    )

    return response
}
