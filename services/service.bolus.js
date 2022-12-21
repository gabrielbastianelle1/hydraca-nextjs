import axios from 'axios'
import { host } from './host'

export function registerBolus(valuesBolus) {
    return new Promise(async (resolve, reject) => {
        try {
            let response = await axios.post(
                `http://${host}:3000/api/user/registerbolus`,
                valuesBolus,
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
