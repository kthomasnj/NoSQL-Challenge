const { ObjectId } = require('mongoose').Types;
const { User } = require('../models/User');

module.exports = {
  getUser(req, res) {
    User.find()
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
  }
};