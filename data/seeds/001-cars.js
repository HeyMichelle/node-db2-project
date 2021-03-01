exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { VIN: '45478793hh466', model: 'Camery', make: 'Toyota', mileage: 2100, transType: 'Automatic', titleStatus: 'salvaged' },
        { VIN: '44668793hh466', model: 'Corolla', make: 'Toyota', mileage: 4567, transType: 'Manual', titleStatus: 'salvaged' }

      ]);
    });
}; 