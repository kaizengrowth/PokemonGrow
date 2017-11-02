const bcrypt = require('bcryptjs');
const User = require('../models/User');

const usersController = {};

usersController.index = (req, res) => {
    User.findUserPokemon(req.user.id)
        .then(pokemons => {
            res.format({
                'text/html': function() {
                    res.render('user/user-index', {
                        user: req.user,
                        pokemons: pokemons,
                        auth: (req.user) ? true : false,
                    })
                },

                'application/json': function() {
                    res.send({ pokemons: pokemons, });
                }
            });
        }).catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
};

usersController.pomodoro = (req, res) => {
    res.render('user/user-pomodoro', {
        auth: (req.user) ? true : false,
    });
}

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