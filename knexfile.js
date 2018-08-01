module.exports = {
    development: {
        client: 'pg',
        version: '7.2',
        connection: {
            host: process.env.DB_HOST,
            database: process.env.DB_DATABASE || 'first',
            user: process.env.DB_USER || 'first',
            password: process.env.DB_PASSWORD || 'first123'
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
    }
}