const express = require('express');
const pokemonsRouter = express.Router();

const pokemonsController = require('../controllers/pokemons-controller');

pokemonsRouter.get('/', pokemonsController.index);

pokemonsRouter.get('/new', (req, res) => {
    res.render('/pokemons/pokemons-new');
});

pokemonsRouter.post('/', pokemonsController.create);

pokemonsRouter.get('/:id', pokemonsController.show);
pokemonsRouter.get('/:id/edit', pokemonsController.edit);
pokemonsRouter.put('/:id', pokemonsController.update);

pokemonsRouter.delete('/:id', pokemonsController.delete);

module.exports = pokemonsRouter;