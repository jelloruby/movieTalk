const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');

const router = express.Router();

const { User } = require('../models/User');
const { isNotLoggedIn, isLoggedIn } = require('../routes/middleware');

//============== User ==============

router.get('/', async (req, res, next) => {
    console.log("loadMyInfo in server :", req.user);
    console.log("쿠키!:", req.headers);
    
    try {
        if(req.user) {
            await User.findById( req.user._id, (err, user) => {
                console.log(user);
                res.status(200).json(user);
            })
        } else {
            res.status(200).json(null);
        }

    } catch(err) {
        console.error(err);
    }
});

// SIGN_UP
router.post('/signup', isNotLoggedIn, async (req, res, next) => {
    // isNotLoggedIn : 로그인을 하지 않은 사용자만 회원가입 하도록 한다.
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)

        const user = new User({
            email: req.body.email,
            name: req.body.name,
            password: hashedPassword,
        });

        await user.save();
        
        return res.status(200).json({
            success: true
        });
    } catch (err) {
        console.log(err);
        next(err);
    };
});

// LOG_IN
router.post('/login', isNotLoggedIn, (req, res, next) => {
    console.log(req.body);
    // isNotLoggedIn : 로그인을 하지 않은 사용자만 로그인하도록 한다.

    // passport.authenticate('local') 내에서 응답처리를 할 수 있도록 미들웨어를 확장하여 사용하도록 한다.
    passport.authenticate('local', (err, user, info) => {
        console.log('authenticate: ', err, user, info);
        // passport 전략 실행
        // local.js에서 done에서 받아온 변수 사용

        if(err) {       // 서버 에러가 존재한다면
            console.error(err);
            return next(err);
        }

        if (info) {     // 클라이언트 에러가 존재한다면
            return res.status(401).send(info.reason);
        }

        // 로그인 실행
        return req.login(user, (loginErr) => {
            if (loginErr) {                      // passport에서 에러가 존재한다면
                console.error(loginErr);
                return next(loginErr);
            } 
            console.log("-----------------------", req.user);
            return res.status(200).json(user);   // 모두 성공시, 사용자 정보와 쿠키를 클라이언트로 넘긴다.
        })

    })(req, res, next);
})

// LOG_OUT
router.post('/logout', isLoggedIn, (req, res) => {
    // isLoggedIn : 로그인을 한 사용자만 로그아웃하도록 한다.
    // console.log(req.session);
    // console.log(req);
    console.log("logout - user: ", req.user);

    // // 로그인 후에는 req.user에 사용자의 정보가 들어있다.
    // // why? deserializeUser가 라우터가 실행되기 전마다 실행되기 때문에
    req.logout();
    req.session.destroy();
    console.log(req.user);
    // https://helloinyong.tistory.com/129
    // https://stackoverflow.com/questions/31641884/does-passports-logout-function-remove-the-cookie-if-not-how-does-it-work
    res.send("로그아웃 되었습니다.");
})

module.exports = router;