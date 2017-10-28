DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(15) UNIQUE NOT NULL,
    password_digest TEXT NOT NULL,
    email VARCHAR(35) NOT NULL,
    firstname VARCHAR(20),
    lastname VARCHAR(20)
);

DROP TABLE IF EXISTS scrums;

CREATE TABLE IF NOT EXISTS scrums (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    start_time TIMESTAMP,
    end_time TIMESTAMP,
    pomodoro_count INTEGER,
    goal_count INTEGER,
    complete BOOLEAN,
    goal_text TEXT,
    review_text TEXT
);

DROP TABLE IF EXISTS pokemon_types;

CREATE TABLE IF NOT EXISTS pokemon_types (
    id SERIAL PRIMARY KEY,
    type VARCHAR NOT NULL,
    stage VARCHAR NOT NULL,
    evolves_into INTEGER,
    image_url VARCHAR
);

DROP TABLE IF EXISTS pokemons;

CREATE TABLE IF NOT EXISTS pokemons (
    id SERIAL PRIMARY KEY,
    name VARCHAR(20) UNIQUE NOT NULL,
    skill VARCHAR(20) UNIQUE NOT NULL,
    mission TEXT,
    type_id INTEGER REFERENCES pokemon_types(id),
    stage VARCHAR,
    level VARCHAR,
    poms INTEGER,
    wins INTEGER,
    last_session TIMESTAMP,
    streak INTEGER,
    health INTEGER,
    hunger INTEGER,
    birthday TIMESTAMP, 
    user_id INTEGER REFERENCES users(id)
);

DROP TABLE IF EXISTS pomodoros;

CREATE TABLE IF NOT EXISTS pomodoros (
    id SERIAL PRIMARY KEY,
    pokemon_id INTEGER REFERENCES pokemons(id),
    scrum_id INTEGER REFERENCES scrums(id),
    start_time TIMESTAMP,
    end_time TIMESTAMP,
    complete BOOLEAN
);