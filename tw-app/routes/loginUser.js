const db = require('../models');
const jwtSecret =  require('../config/passport/jwtConfig');
const jwt = require('jsonwebtoken');
const passport = require('passport');

module.exports = app => {
  app.get('/loginUser', (req, res, next) => {
    passport.authenticate('login', (err, user, info) => {
      if (err) {
        console.log(err);
      }
      if (info != undefined) {
        console.log(info.message);
        res.send(info.message);
      } else {
        req.logIn(user, err => {
            console.log("Line 17 in loginUser")
          db.User.findOne({
            where: {
              email: user.email,
            },
          }).then(user => {
              console.log("HELLLOOOOOOOOOOOOOOO")
            const token = jwt.sign({ id: user.email }, jwtSecret.secret);
            res.status(200).send({
              auth: true,
              token: token,
              message: 'user found & logged in',
            });
          });
        });
      }
    })(req, res, next);
  });
};
