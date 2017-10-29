const db = require('../db/config');

const User = {};

User.findByUserName = (userName) => {
    return db.one(`
        SELECT * FROM users
        WHERE username = $1
    `, [userName]);
}

User.findUserPokemon = (userId) => {
    return db.manyOrNone(`
        SELECT * FROM pokemons
        WHERE user_id = $1
    `, [userId]);
};

User.findUserScrum = (userId) => {
    return db.manyOrNone(`
        SELECT * FROM scrums
        WHERE user_id = $1
    `, [userId]);
};

User.create = (user) => {
    return db.one(`
        INSERT INTO users
        (username, password_digest, email, firstname, lastname)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *
    `, [user.username, user.password_digest, user.email, user.firstname, user.lastname]);
};

module.exports = User;