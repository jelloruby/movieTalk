
const passport = require('passport');
const bcrypt = require('bcrypt');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const config = require('../config/key');
const { User } = require('../models/User');

passport.serializeUser((user, done) => {
    console.log('serializeUser: ', user._id);
    // 로그인에 최초 성공하면 세션에 id 를 저장한다.
    done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
    console.log('deserializeUser: ', id);
    // 로그인에 성공 후, 페이지에 방문할 때마다 로그인한 사용자인지 확인하기 위해 매번 호출된다.
    try {
        await User.findById(id, (err, user) => {
            done(null, user); //req.user
        });
    } catch(err) {
        console.error(err);
        done(err);
    }
});

/*
  Sign in by LocalStrategy
*/
passport.use(new LocalStrategy({ usernameField: 'email', passwordField: 'password'}, (email, password, done) => {
    console.log('LocalStrategy :', email, password);

    // 기존 유저가 있는지 확인하기
    User.findOne({ email: email.toLowerCase() }, async (err, user) => {
        if (err) { return done(err); }

        // 유저가 없다면
        if (!user) {
            // done( 서버 에러, 성공되어 보내는 값, 클라이언트 에러 )
            return done(null, false, { reason: '존재하지 않는 이메일입니다!' });
        }

        // 유저가 있다면
        // DB에 저장된 비밀번호와 사용자가 입력한 비밀번호를 비교한다.
        const result = await bcrypt.compare(password, user.password);

        if (result) {
            return done(null, user);
        } else {
            // 비밀번호가 일치하지 않는다면
            return done(null, false, { reason: '비밀번호가 틀렸습니다.' });
        }
    });
}));

/*
  Sign in by GoogleStrategy
*/
const googleStrategyConfig = new GoogleStrategy({
    clientID: config.googleClientId,
    clientSecret: config.googleClientSecret,
    callbackURL: '/auth/google/callback',
    passReqToCallback: true
}, (req, accessToken, refreshToken, params, profile, done) => {
    console.log('req.user', req.user)
    if (req.user) {
        User.findOne({ google: profile.id }, (err, existingUser) => {
            if (err) { return done(err); }
            if (existingUser && (existingUser.id !== req.user.id)) {
                done(err);
            } else {
                User.findById(req.user.id, (err, user) => {
                    if (err) { return done(err); }
                    user.google = profile.id;
                    user.name = user.name || profile.displayName;
                    user.image = user.image || profile._json.picture;
                    user.save((err) => {
                        done(err, user);
                    });
                });
            }
        });
    } else {
        User.findOne({ google: profile.id }, (err, existingUser) => {
            if (err) { return done(err); }
            if (existingUser) {
                return done(null, existingUser);
            }
            User.findOne({ email: profile.emails[0].value }, (err, existingEmailUser) => {
                if (err) { return done(err); }
                if (existingEmailUser) {
                    done(err);
                } else {
                    const user = new User();
                    user.email = profile.emails[0].value;
                    user.google = profile.id;
                    user.name = user.name || profile.displayName;
                    user.image = user.image || profile._json.picture;
                    user.save((err) => {
                        done(err, user);
                    });
                }
            });
        });
    }
});
passport.use('google', googleStrategyConfig);
