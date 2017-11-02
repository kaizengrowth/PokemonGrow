const express = require('express');
const pokemonsRouter = express.Router();
const authHelpers = require('../services/auth/auth-helpers');

const pokemonsController = require('../controllers/pokemons-controller');

pokemonsRouter.get('/', pokemonsController.index);

pokemonsRouter.get('/new', (req, res) => {
    res.render('./pokemons/pokemons-new');
});

pokemonsRouter.post('/', authHelpers.loginRequired, pokemonsController.create);

pokemonsRouter.get('/:id', pokemonsController.show);
pokemonsRouter.get('/:id/edit', authHelpers.loginRequired, pokemonsController.edit);
pokemonsRouter.put('/:id', authHelpers.loginRequired, pokemonsController.update);

pokemonsRouter.delete('/:id', authHelpers.loginRequired, pokemonsController.delete);

module.exports = pokemonsRouter;