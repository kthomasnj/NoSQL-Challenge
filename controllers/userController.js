const { Users } = require('../models');

module.exports = {
  getUser(req, res) {
    Users.find()
      .then(async (user) => {
        const userObj = {
          user
        };
        return res.json(userObj);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  createUser(req, res) {
    Users.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  }
};