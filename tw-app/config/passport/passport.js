const bcrypt = require("bcrypt");
const jwtSecret = require("./jwtConfig");

const BCRYPT_SALT_ROUNDS = 12;

const passport = require('passport'),
  localStrategy = require('passport-local').Strategy,
  db = require('../../models'),
  JWTstrategy = require('passport-jwt').Strategy,
  ExtractJWT = require('passport-jwt').ExtractJwt;

passport.use(
  'register',
  new localStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      session: false,
      passReqToCallback: true
    },
    (req, email, password, done) => {
      try {
        db.User.findOne({
          where: {
            email: email,
          },
        }).then(user => {
          if (user != null) {
            console.log('email is already taken');
            return done(null, false, { message: 'email already taken' });
          } else {
            bcrypt.hash(password, BCRYPT_SALT_ROUNDS).then(hashedPassword => {
              db.User.create({ email: email, username: req.body.username, password: hashedPassword }).then(user => {
                console.log('user created');
                return done(null, user);
              });
            });
          }
        });
      } catch (err) {
        done(err);
      }
    },
  ),
);

passport.use(
  'login',
  new localStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      session: false,
    },
    (email, password, done) => {
      try {
        db.User.findOne({
          where: {
            email: email,
          },
        }).then(user => {
          if (user === null) {
            return done(null, false, { message: 'bad email' });
          } else {
            bcrypt.compare(password, user.password).then(response => {
              if (response !== true) {
                console.log('passwords do not match');
                return done(null, false, { message: 'passwords do not match' });
              }
              console.log('user found & authenticated');
              return done(null, user);
            });
          }
        });
      } catch (err) {
        done(err);
      }
    },
  ),
);

const opts = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme('JWT'),
  secretOrKey: jwtSecret.secret,
};

passport.use(
  'jwt',
  new JWTstrategy(opts, (jwt_payload, done) => {
    try {
      db.User.findOne({
        where: {
          // change to username
          email: jwt_payload.id,
        },
      }).then(user => {
        if (user) {
          console.log('user found in db in passport');
          done(null, user);
        } else {
          console.log('user not found in db');
          done(null, false);
        }
      });
    } catch (err) {
      done(err);
    }
  }),
);
