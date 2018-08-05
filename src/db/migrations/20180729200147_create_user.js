exports.up = function (knex) {
    return knex.schema
        .createTable('user', (table) => {
            table.uuid('id').primary();
            table.string('name', 100);
            table.string('email', 100);
            table.enu('roles', ['admin', 'place-admin']);
            table.string('password');
            table.boolean('active');
            table.timestamps();
        });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('user');
};