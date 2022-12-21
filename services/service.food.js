import axios from 'axios'
import { host } from './host'

export function getAllFood() {
    return new Promise(async (result, reject) => {
        try {
            let response = await axios.post(
                `http://${host}:3000/api/user/food`,
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
