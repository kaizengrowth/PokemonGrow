const User = require('../models/User');
const bcrypt = require('bcryptjs');

const usersController = {};

// usersController.index = (req, res) => {
//   User.findUserFlashcards(req.user.id)
//     .then(flashcards => {
//       res.render('user/user-index', {
//         user: req.user,
//         flashcards: flashcards,
//         auth: (req.user) ? true : false,
//       })
//     }).catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// };

usersController.create = (req, res, next) => {
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(req.body.password, salt);
    User.create({
            username: req.body.username,
            password_digest: hash,
            email: req.body.email,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
        })
        .then(user => {
            req.login(user, err => {
                if (err) return next(err);
                res.redirect('/user');
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
};

module.exports = usersController;