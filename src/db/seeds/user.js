var uuid = require("uuid");
var bcrypt = require("bcryptjs");

exports.seed = async function(knex, Promise) {
  var adminUser = {
    id: uuid.v4(),
    name: 'admin',
    email: 'cesar_augustoiv@hotmail.com',
    password: 'Augusto99',
    active: true,
    roles: 'admin',
    created_at: new Date(),
    updated_at: new Date()
  };

  var user = await knex
  .count()
  .from('user')
  .where('email', '=', adminUser.email)
  .first();

  if (Number(user.count) > 0) return;

  return await knex('user')
    .then(async function () {
      // Inserts seed entries
      adminUser.password = await bcrypt.hashSync(adminUser.password);
       return knex('user').insert(adminUser);
    });
};
