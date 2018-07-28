module.exports = {
    development: {
        client: 'pg',
        version: '7.2',
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
            directory: 'src/server/db/migrations'
        }
    }
}