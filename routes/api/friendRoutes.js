const router = require('express').Router();
const {
  addFriend,
  removeFriend
} = require('../../controllers/friendController');

router.route('/:userId/friend/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;