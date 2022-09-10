const { Pool } = require('pg')



try {

    var pool = new Pool({
        user: process.env.PGUSER,
        host: process.env.PGHOST,
        database: process.env.PGDATABASE,
        password: process.env.PGPASSWORD,
        port: process.env.PGPORT,
        ssl: { rejectUnauthorized: false }

    });

    (async function () {
        const client = await pool.connect()
        client.end();

    })()



} catch (error) {
    console.log(error);
}


module.exports = pool;