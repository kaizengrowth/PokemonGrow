const db = require('../db/config');

const Pokemon = {};

Pokemon.findAll = () => {
    return db.query('SELECT * FROM pokemons');
};

Pokemon.findById = id => {
    return db.one(
        `SELECT * FROM pokemons
    WHERE id = $1`, [id]);
};

Pokemon.create = pokemon => {
    return db.one(
        `INSERT INTO pokemons
    (name, skill, type, birthday, user_id, last_session)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *`, [pokemon.name, pokemon.skill, pokemon.type, pokemon.birthday, pokemon.user_id, pokemon.last_session]);
};

Pokemon.update = (pokemon, id) => {
    return db.one(
        `UPDATE pokemons SET
    name = $1,
    skill = $2
    WHERE id = $3
    RETURNING *`, [pokemon.name, pokemon.skill, id]);
};

Pokemon.destroy = id => {
    return db.none(
        `DELETE FROM pokemons
    WHERE id = $1`, [id]);
};

module.exports = Pokemon;