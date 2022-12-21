import axios from 'axios'
import { host } from './host'

export function registerBasal(valuesBasal) {
    return new Promise(async (resolve, reject) => {
        try {
            let response = await axios.post(
                `http://${host}:3000/api/user/registerbasal`,
                valuesBasal,
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
