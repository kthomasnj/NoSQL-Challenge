const Thought = require('../models/Thought');
const User = require('../models/User');

module.exports = {
    getThought(req, res) {
        Thought.find()
            .then(async (thought) => {
                const thoughtObj = {
                    thought
                };
                return res.json(thoughtObj);
            })
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.userId })
            .select('-__v')
            .then(async (thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with that ID' })
                    : res.json({ thought })
            )
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },
    createThought(req, res) {
        const newThought = req.body;
        Thought.create(newThought)
            .then((createdThought) => {
                return User.findOneAndUpdate(
                    { _id: req.params.userId },
                    { $push: { thoughts: createdThought._id } },
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
            })
    },
    deleteThought(req, res) {
        Thought.findOneAndRemove({ _id: req.params.thoughtId })
            .then(() => {
                return User.findOneAndUpdate(
                    { _id: req.params.userId },
                    { $pull: { thoughts: req.params.thoughtId } }
                )
            })
            .then((thought) => {
                !thought
                    ? res.status(404).json({ message: 'No thought with that ID' })
                    : res.json({ thought })
            })
    },
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { thoughtText: req.body.thoughtText },
            { new: true }
        )
            .then((thought) => {
                !thought
                    ? res.status(404).json({ message: 'No thought with that ID' })
                    : res.json({ thought })
            })
    },
    createReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $push: { reactions: req.body } },
            { new: true }
        )
        .then((reaction) => {
            !reaction
                ? res.status(404).json({ message: 'No reaction with that ID' })
                : res.json({ reaction })
        })
    }
}