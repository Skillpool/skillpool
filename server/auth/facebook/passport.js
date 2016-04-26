import passport from 'passport';
import sequelize from 'sequelize';
import {Strategy as FacebookStrategy} from 'passport-facebook';

export function setup(User, config) {
  passport.use(new FacebookStrategy({
    clientID: config.facebook.clientID,
    clientSecret: config.facebook.clientSecret,
    callbackURL: config.facebook.callbackURL,
    profileFields: [
      'displayName',
      'emails'
    ]
  },
  function(accessToken, refreshToken, profile, done) {
    /*User.find({where:{'facebook.id': profile.id}})*/

  /*  User.find({where:sequelize.where(
                sequelize.literal('facebook->"$.id"'),
                profile.id
              )
    })
*/
    User.find({
      where: {
        $or: [sequelize.where(
                      sequelize.literal('facebook->"$.id"'),
                      profile.id
          ),
            sequelize.where(
                      sequelize.literal('email'),
                      profile.emails[0].value
          )
          
        ]
      }
    }).then(user => {
        if (user) {
          return done(null, user);
        }
        user = User.build({
          name: profile.displayName,
          email: profile.emails[0].value,
          role: 'user',
          provider: 'facebook',
          facebook: profile._json,
          profile_complete:false
        });
        user.save()
          .then(user => done(null, user))
          .catch(err => done(err));
      })
      .catch(err => done(err));
  }));
}
