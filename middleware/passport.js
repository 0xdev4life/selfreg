const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt  = require('passport-jwt').ExtractJwt
const keys        = require('../config/keys')
const User        = require('../models/Users.js')

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: keys.jwt
}

module.exports = passport => {
    passport.use(new JwtStrategy(options, async (payload, done) => {
        try {
            console.log('check...', payload)
            const user = await User.findById(payload.userId).select('email id')
            console.log('got...', user)
            if (user) {
                console.log('its ok')
                done(null, user)
            } else {
                console.log('bad')
                done(null, false)
            }
        } catch (e) {

        }
    }))
}
