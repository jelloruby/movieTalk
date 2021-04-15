const express = require('express');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const dotenv = require('dotenv');
const app = express();
const mongoose = require('mongoose');

const config = require('./config/key');

const userRouter = require('./routes/user');
const reviewRouter = require('./routes/review');

// const passportConfig = require('./passport');
require('./passport/passport');

dotenv.config();
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.error(err));


// 미들웨어
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended : false })); 
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
    cookie : { secure : false, maxAge : (4 * 60 * 60 * 1000) },
    // store: require('mongoose-session')(mongoose)
}));
app.use(passport.initialize());
app.use(passport.session());



app.use('/user', userRouter);
app.use('/review', reviewRouter);

app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
    res.redirect("http://localhost:3000/");
});

const port = 5000;

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});