const { connectDatabase } = require('../../src/config/database.connection')
const { insertInitialData } = require('../../src/config/initialData')

export default function handler(req, res) {
    connectDatabase()
    insertInitialData()
    res.status(200).json('ready')
}
