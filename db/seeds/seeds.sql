INSERT INTO pokemon_types (type, stage, evolves_into, image_url)
VALUES ('egg', 0, NULL, './img/egg.png');

INSERT INTO pokemon_types (type, stage, evolves_into, image_url)
VALUES ('bulbasaur', 1, 3, './img/bulbasaur.png');

INSERT INTO pokemon_types (type, stage, evolves_into, image_url)
VALUES ('ivysaur', 2, 4, './img/ivysaur.png');

INSERT INTO pokemon_types (type, stage, evolves_into, image_url)
VALUES ('venusaur', 3, NULL, './img/venusaur.png');

INSERT INTO pokemon_types (type, stage, evolves_into, image_url)
VALUES ('charmander', 1, 6, './img/charmander.png');

INSERT INTO pokemon_types (type, stage, evolves_into, image_url)
VALUES ('charmeleon', 2, 7, './img/charmeleon.png');

INSERT INTO pokemon_types (type, stage, evolves_into, image_url)
VALUES ('charizard', 3, NULL, './img/charizard.png');

INSERT INTO pokemon_types (type, stage, evolves_into, image_url)
VALUES ('squirtle', 1, 9, './img/squirtle.png');

INSERT INTO pokemon_types (type, stage, evolves_into, image_url)
VALUES ('wartortle', 2, 10, './img/wartortle.png');

INSERT INTO pokemon_types (type, stage, evolves_into, image_url)
VALUES ('blastoise', 3, NULL, './img/blastoise.png');

INSERT INTO pokemon_types (type, stage, evolves_into, image_url)
VALUES ('pichu', 1, 12, './img/pichu.png');

INSERT INTO pokemon_types (type, stage, evolves_into, image_url)
VALUES ('pikachu', 2, 13, './img/pikachu.png');

INSERT INTO pokemon_types (type, stage, evolves_into, image_url)
VALUES ('raichu', 3, NULL, './img/raichu.png');

INSERT INTO pokemons (name, skill, mission, type_id, level, poms, wins, last_session, streak, health, hunger, birthday, user_id) 
VALUES ('MVC Pikachu', 'Express Routes', 'Make a CRUD app for Project #2', 11, 8, 8, 8, 2017-10-29 16:13:40.700229-04, 3, 67, 39, 2017-10-29 16:13:40.700229-04, 1);

INSERT INTO pokemons (name, skill, mission, type_id, level, poms, wins, last_session, streak, health, hunger, birthday, user_id) 
VALUES ('Express Squirtle', 'Express Authentication', 'Understanding passport and express-sessions', 8, 9, 9, 8, 2017-10-29 16:13:40.700229-04, 3, 47, 37, 2017-10-29 16:13:40.700229-04, 1);