import axios from 'axios'

let diabetesService = {
    getAllDiabetes: function () {
        return new Promise(async (result, reject) => {
            console.log('entrei aqui')
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
