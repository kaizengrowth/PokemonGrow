DELETE FROM pokemons WHERE id = 1;
DELETE FROM pokemons WHERE id = 2;

ALTER TABLE pokemons 
DROP COLUMN mission;

ALTER TABLE pokemons 
DROP COLUMN wins;

ALTER TABLE pokemons
DROP COLUMN level;

INSERT INTO pokemons (name, skill, poms, streak, health, hunger, user_id, type) 
VALUES ('MVC Pikachu', 'Express Routes', 11, 8, 36, 26, 1, 'pikachu');

INSERT INTO pokemons (name, skill, poms, streak, health, hunger, user_id, type) 
VALUES ('Express Squirtle', 'Express Auth', 8, 9, 47, 7, 1, 'squirtle');