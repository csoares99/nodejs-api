import * as Knex from 'knex';
import { Model } from 'objection';

export async function connect() {
    const knexInstance = Knex({
        client: 'pg',
        debug: false,
        connection: {
            host: process.env.DB_HOST,
            database: process.env.DB_DATABASE,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD
        },
        pool: {
            min: 1,
            max: 50
        },
        migrations: {
            tableName: 'migrations',
            directory: 'src/db/migrations'
        },
        seeds: {
            directory: 'src/db/seeds'
        }
    });

    Model.knex(knexInstance);

    try {
        await knexInstance.migrate.latest();
        console.log("database compled");
        console.log("**************************************************************");
    } catch (err) {
        console.log(err);
    }
}

