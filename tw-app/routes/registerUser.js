const db = require('../models');
const passport = require('passport');

module.exports = app => {
  app.post('/registerUser', (req, res, next) => {
    passport.authenticate('register', (err, user, info) => {
      console.log(req.body);

      if (err) {
        console.log(err);
      }
      if (info != undefined) {
        console.log(info.message);
        res.send(info.message);
      } else {
        req.logIn(user, err => {
          const data = {
            email: req.body.email,
            username: user.username,
          };
          db.User.findOne({
            where: {
              email: data.email,
            },
          }).then(user => {
            user
              .update({
                  email: data.email
                  // username & password?
              })
              .then(() => {
                console.log('user created in db');
                res.status(200).send({ message: 'user created' });
              });
          });
        });
      }
    })(req, res, next);
  });
};
