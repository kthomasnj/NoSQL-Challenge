const router = require('express').Router();
const {
  getThought,
  createThought,
  getSingleThought,
  deleteThought,
  updateThought
} = require('../../controllers/thoughController');

router.route('/').get(getThought);
router.route('/:userId').get(getSingleThought).post(createThought);
router.route('/:thoughtId/user/:userId').delete(deleteThought);

module.exports = router;