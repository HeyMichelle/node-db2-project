const knex = require('knex');
const knexConfig = require('../knexfile.js');

const db = knex(knexConfig.development); // selecting dev environment from knex file where knex is configured

module.exports = db;

// const knex = require("knex")
// const knexfile = require("../knexfile")
// // module.exports = knex(knexfile)
//     const database = development
// module.exports = knex(knexfile[database]);
