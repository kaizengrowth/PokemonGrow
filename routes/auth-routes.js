const express = require('express');
const authRouter = express.Router();
const authHelpers = require('../services/auth/auth-helpers');
const usersController = require('../controllers/users-controller');
const passport = require('../services/auth/local');

authRouter.get('/login', authHelpers.loginRedirect, (req, res) => {
    res.render('auth/login', {
        auth: (req.user) ? true : false,
    });
});

authRouter.post('/login', passport.authenticate('local', {
    successRedirect: '/user',
    failureRedirect: '/auth/login',
    failureFlash: true,
}));

authRouter.get('/register', authHelpers.loginRedirect, (req, res) => {
    res.render('auth/register', {
        auth: (req.user) ? true : false,
    });
});
authRouter.post('/register', usersController.create);

authRouter.get('/logout', (req, res) => {
    req.logout();
    res.render('index');
});

module.exports = authRouter;