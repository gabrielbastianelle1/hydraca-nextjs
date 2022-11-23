import axios from 'axios'

let authService = {
    signin: function (email, password) {
        return new Promise(async (result, reject) => {
            try {
                let response = await axios.post(
                    'http://localhost:3000/api/signin',
                    {
                        email: email,
                        password: password
                    }
                )
                localStorage.setItem('token', response.data)
                return result(response.data)
            } catch (error) {
                return reject(error)
            }
        })
    },

    getCurrentUser: async function () {
        return new Promise(async (result, reject) => {
            try {
                let response = await axios.get(
                    'http://localhost:3000/api/user',
                    {
                        headers: {
                            'x-access-token': localStorage.getItem('token')
                        }
                    }
                )
                return result(response)
            } catch (error) {
                return reject(error)
            }
        })
    }
}
export default authService
