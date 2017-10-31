const express = require('express');
const userRouter = express.Router();
const usersController = require('../controllers/users-controller');
const authHelpers = require('../services/auth/auth-helpers');

userRouter.get('/', authHelpers.loginRequired, usersController.index);

userRouter.get('/pomodoro', (req, res) => {
    res.render('./users/users-pomodoro');
});

module.exports = userRouter;