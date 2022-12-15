import axios from 'axios'

let foodService = {
    getAllFood: function () {
        return new Promise(async (result, reject) => {
            try {
                let response = await axios.get(
                    'http://localhost:3000/api/user/food'
                )
                return result(response)
            } catch (error) {
                return reject(error)
            }
        })
    }
}

export default foodService
