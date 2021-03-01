exports.up = async function (knex) {
  await knex.schema.createTable("cars", (tbl) => {
    tbl.increments("id"); // creates a primary key called id
    tbl
      .string("vin") // creates a text field called name which is both required and unique
      .notNullable()
      .unique();
    tbl.string("model").notNullable();
    tbl.string("make").notNullable();
    tbl.integer("mileage").notNullable();
    tbl.string("transType");
    tbl.string("titleStatus");
  });
};
//how to apply the migration going forward

//how to apply the migration going backward
exports.down = async function (knex) {
  // translates to `DROP TABLE IF EXISTS "cars"`
  await knex.schema.dropTableIfExists("cars");
};

// if one is async await they should all be
