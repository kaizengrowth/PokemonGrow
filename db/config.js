const options = {
    query: (e) => {
        console.log(e.query);
    }
}

const pgp = require('pg-promise')(options);

const db = setDatabase();

function setDatabase() {
    if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
        return pgp({
            database: 'pokemon_grow',
            port: 5432,
            host: 'localhost',
        });
    } else if (process.env.NODE_ENV === 'production') {
        return pgp(process.env.DATABASE_URL);
    }
}

module.exports = db;