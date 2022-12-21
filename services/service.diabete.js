import axios from 'axios'
import { host } from './host'

let diabetesService = {
    getAllDiabetes: function () {
        return new Promise(async (result, reject) => {
            try {
                let response = await axios.get(
                    `http://${host}:3000/api/admin/getalldiabetes`
                )
                return result(response)
            } catch (error) {
                return reject(error)
            }
        })
    }
}

export default diabetesService
