const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employee = employees.find((busca) => (id === busca.id));
  const idAnimal = employee.responsibleFor.find((specie) => specie[0]);
  return idAnimal;
}

module.exports = getOldestFromFirstSpecies;
