const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
 const agua =  data.employees.find((iden) => {
    if (id === iden.id) {
      return Object.keys(iden.firstName);
    }
  })

  return agua;
}
console.log(getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = getOldestFromFirstSpecies;
