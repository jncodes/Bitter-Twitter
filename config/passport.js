const JwtSrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const User = mongoose.model('users');
const keys = require('./keys');

const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = keys.secretOrkey;

module.exports = passport => {
    passport.use(new JwtSrategy(options, (jwt_payload, done) => {
        console.log(jwt_payload);
        done();
    }))
}