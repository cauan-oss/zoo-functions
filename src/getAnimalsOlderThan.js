const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const granola = data.species.find((batata) => animal === batata.name);

  return granola.residents.every((grama) => grama.age >= age);
}
module.exports = getAnimalsOlderThan;
