const router = require('express').Router();
const {
  getUser,
  createUser,
  getSingleUser,
  deleteUser
} = require('../../controllers/userController');

router.route('/').get(getUser).post(createUser);
router.route('/:userId').delete(deleteUser).get(getSingleUser);

module.exports = router;