const adminService = require('../services/service.admin')

let adminController = {
    getAllUsers: async function (req, res) {
        try {
            return res.status(200).json(await adminService.getAllUsers())
        } catch (error) {
            return res.status(400).json(error)
        }
    },

    getAllUsersRemove: async function (req, res) {
        try {
            console.log('viviab')
            return res.status(200).json(await adminService.getAllUsersRemove())
        } catch (error) {
            return res.status(400).json(error)
        }
    },

    getUsersEmail: async function (req, res) {
        try {
            return res
                .status(200)
                .json(await adminService.getUsersEmail(req.params.email))
        } catch (error) {
            return res.status(400).json(error)
        }
    },

    getAllTherapies: async function (req, res) {
        try {
            return res.status(200).json(await adminService.getAllTherapies())
        } catch (error) {
            return res.status(400).json(error)
        }
    },

    getAllFood: async function (req, res) {
        try {
            return res.status(200).json(await adminService.getAllFood())
        } catch (error) {
            return res.status(400).json(error)
        }
    },

    getFoodId: async function (req, res) {
        try {
            return res
                .status(200)
                .json(await adminService.getFoodId(req.params._id))
        } catch (error) {
            return res.status(400).json(error)
        }
    },

    getAllDiabete: async function (req, res) {
        try {
            return res.status(200).json(await adminService.getAllDiabete())
        } catch (error) {
            return res.status(400).json(error)
        }
    },

    getDiabeteId: async function (req, res) {
        try {
            return res
                .status(200)
                .json(await adminService.getDiabeteId(req.params._id))
        } catch (error) {
            return res.status(400).json(error)
        }
    },

    insertTherapy: async function (req, res) {
        try {
            return res
                .status(200)
                .json(await adminService.insertTherapy(req.body))
        } catch (error) {
            return res.status(400).json(error)
        }
    },

    insertFood: async function (req, res) {
        try {
            return res.status(200).json(await adminService.insertFood(req.body))
        } catch (error) {
            return res.status(400).json(error)
        }
    },

    insertDiabete: async function (req, res) {
        try {
            return res
                .status(200)
                .json(await adminService.insertDiabete(req.body))
        } catch (error) {
            return res.status(400).json(error)
        }
    },

    deleteTherapy: async function (req, res) {
        try {
            return res
                .status(200)
                .json(await adminService.deleteTherapy(req.params.name))
        } catch (error) {
            return res.status(400).json(error)
        }
    },

    deleteUser: async function (req, res) {
        try {
            return res
                .status(200)
                .json(await adminService.deleteUser(req.params.email))
        } catch (error) {
            return res.status(400).json(error)
        }
    },

    deleteFood: async function (req, res) {
        try {
            return res
                .status(200)
                .json(await adminService.deleteFood(req.params.name))
        } catch (error) {
            return res.status(400).json(error)
        }
    },

    deleteDiabete: async function (req, res) {
        try {
            return res
                .status(200)
                .json(await adminService.deleteDiabete(req.params.type))
        } catch (error) {
            return res.status(400).json(error)
        }
    },

    updateTherapy: async function (req, res) {
        try {
            return res
                .status(200)
                .json(await adminService.updateTherapy(req.body, req.params))
        } catch (error) {
            return res.status(400).json(error)
        }
    },

    updateFood: async function (req, res) {
        try {
            return res
                .status(200)
                .json(await adminService.updateFood(req.body, req.params))
        } catch (error) {
            return res.status(400).json(error)
        }
    },

    updateDiabete: async function (req, res) {
        try {
            return res
                .status(200)
                .json(await adminService.updateDiabete(req.body, req.params))
        } catch (error) {
            return res.status(400).json(error)
        }
    },

    updateUser: async function (req, res) {
        try {
            return res
                .status(200)
                .json(await adminService.updateUser(req.body, req.params))
        } catch (error) {
            return res.status(400).json(error)
        }
    }
}

module.exports = adminController
