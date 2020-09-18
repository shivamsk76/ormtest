const { authenticate } = require('passport')

const LocalStrategy = require('passport-local').Strategy
function initialize(passport) {

    const authenticateUser = (username,password,done)=>{

    }
    passport.use(new LocalStrategy({ usernameField: 'username'}),authenticateUser)
    password.serializeUser((user,done)=>{})
    password.deserializeUser((user,done)=>{})
}
module.exports = initialize