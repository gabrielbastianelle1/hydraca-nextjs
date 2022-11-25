import axios from 'axios'

export function updateProfile(userEmail, valuesToUpdate) {
    return new Promise(async (resolve, reject) => {
        try {
            let response = await axios.post(
                'http://localhost:3000/api/user/updateprofile',
                {
                    userEmail,
                    valuesToUpdate
                }
            )
            return resolve(response)
        } catch (error) {
            console.log(error)
            return reject(error)
        }
    })
}
