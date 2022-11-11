const router = require('express').Router();
const {
  getThought,
  createThought,
  getSingleThought,
  deleteThought,
  updateThought,
  createReaction,
  deleteReaction
} = require('../../controllers/thoughController');

router.route('/').get(getThought);
router.route('/:userId').get(getSingleThought).post(createThought);
router.route('/:thoughtId/user/:userId').delete(deleteThought);
router.route('/:thoughtId').put(updateThought);
router.route('/reaction/:thoughtId').post(createReaction);
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;