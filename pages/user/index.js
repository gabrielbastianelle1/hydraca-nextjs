const userController = require('../../src/controllers/controller.user')
const verifyToken = require('../../src/middlewares/verifyToken')

export default verifyToken(userController.getCurrentUser)
{
    const { data: session } = useSession()
    // session is always non-null inside this page, all the way down the React tree.
    return 'Some super secret dashboard'
}
