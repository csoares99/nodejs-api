
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('place', (table) => {
        table.increments('id').primary();
        table.string('name');
        table.string('address');
        table.string('number');
        table.string('city');
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('place');
};
