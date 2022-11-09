const User = require('../models/User');

module.exports = {
    addFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $push: { friends: req.params.friendId } },
            { new: true }
        ).then((updatedUser) => {
            !updatedUser
                ? res.status(404).json({ message: 'No user with that ID' })
                : res.json({ updatedUser })
        })
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },
    removeFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: req.params.friendId } },
            { new: true }
        ).then((updatedUser) => {
            !updatedUser
                ? res.status(404).json({ message: 'No user with that ID' })
                : res.json({ updatedUser })
        })
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    }
}