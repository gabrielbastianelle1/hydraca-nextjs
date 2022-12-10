import axios from 'axios'

export function registerBasal(valuesBasal) {
    return new Promise(async (resolve, reject) => {
        try {
            let response = await axios.post(
                'http://localhost:3000/api/user/registerbasal',
                valuesBasal,
                {
                    headers: {
                        'x-access-token': localStorage.getItem('token')
                    }
                }
            )
            console.log(response)
            return resolve(response)
        } catch (error) {
            console.log(error)
            return reject(error)
        }
    })
}
