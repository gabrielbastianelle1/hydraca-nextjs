import axios from 'axios'

let diabetesService = {
    getAllDiabete: function () {
        return new Promise(async (result, reject) => {
            try {
                let response = await axios.get(
                    'http://localhost:3000/api/admin/getalldiabetes'
                )
                return result(response)
            } catch (error) {
                return reject(error)
            }
        })
    }
}

export default diabetesService
