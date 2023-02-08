const User = require("../models/user.js");


// update a user
const updateUser = (req, res, next) => {
  id = req.auth._id
  User.findOneAndUpdate(
    id,
    req.body,
    { new: true },
    (err, updatedUser) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(201).send(updatedUser);
    }
  );
};

module.exports = {
  updateUser
};
