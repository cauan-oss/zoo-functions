const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employee = data.employees.find((busca) => id === busca.id);

  const idAnimal = employee.responsibleFor.find((specie) => specie[0]);
  const test = species.filter((element) => idAnimal === element.id);
  const ord = test[0].residents.sort((a, b) => b.age - a.age);
  return Object.values(ord[0]);
}
console.log(getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = getOldestFromFirstSpecies;

/* const apple = idAnimal.filter((senior) => {
    if (senior === employee.id) {
      return species.residents.sort((velho) => velho[0]);
    }
  });
   return apple; */
