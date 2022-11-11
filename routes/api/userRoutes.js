const router = require('express').Router();
const {
  getUser,
  createUser,
  getSingleUser,
  updateUser,
  deleteUser
} = require('../../controllers/userController');

router.route('/').get(getUser).post(createUser);
router.route('/:userId').delete(deleteUser).get(getSingleUser).put(updateUser);

module.exports = router;