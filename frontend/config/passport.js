const passport = require("passport");
const { Strategy } = require("passport-google-oauth2");

passport.use(new Strategy(
    {
        // clientID: process.env.PASSPORT_CLIENT_ID,
        // clientSecret: process.env.PASSPORT_CLIENT_SECRET,
        clientID: "149859684978-b5k461867e73071fpqrqpfp5qts98e5i.apps.googleusercontent.com",
        clientSecret: "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",
        callbackURL: "http://localhost:8000/api/v1/auth/google",
        passReqToCallback: true
    },
    (request, accessToken, refreshToken, profile, done) => {
        return done(null, profile)
    },
    passport.serializeUser((user, done) => {
        done(null, user);
    }),
    passport.deserializeUser((user, done) => {
        done(null, user);
    })
))