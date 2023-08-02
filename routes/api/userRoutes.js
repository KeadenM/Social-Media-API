const router = require('express').Router();
const {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/userController');

router.get('/users', (req, res) => {
    res.json({ message: 'api route hit'});
})

router.post('/', createUser);

router.route('/:userId').get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;