import axios from 'axios'

export function getAllFood() {
    return new Promise(async (result, reject) => {
        try {
            let response = await axios.post(
                'http://localhost:3000/api/user/food',
                {},
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
