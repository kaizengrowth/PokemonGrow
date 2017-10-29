const User = require('../../models/User');
const passport = require('passport');

module.exports = () => {
    passport.serializeUser((user, done) => {
        done(null, user.username);
    });

    passport.deserializeUser((username, done) => {
        User.findByUserName(username)
            .then(user => {
                done(null, user);
            }).catch(err => {
                done(err, null);
            });
    });
};