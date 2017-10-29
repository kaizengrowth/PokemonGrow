const bcrypt = require('bcryptjs');
const User = require('../models/User');

const usersController = {};

// usersController.index = (req, res) => {
//     User.findUserScrums(req.user.id)
//         .then(scrums => {
//             res.render('user/user-index', {
//                 user: req.user,
//                 scrums: scrums,
//                 auth: (req.user) ? true : false,
//             })
//         }).catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// };

usersController.index = (req, res) => {
    res.json({
        message: 'Put a user profile page on this route',
        data: {
            user: req.user,
        },
    });
};

usersController.create = (req, res, next) => {
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(req.body.password, salt);
    User.create({
        username: req.body.username,
        password_digest: hash,
        email: req.body.email,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
    }).then(user => {
        req.login(user, err => {
            if (err) return next(err);
            res.redirect('/user');
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
};

module.exports = usersController;