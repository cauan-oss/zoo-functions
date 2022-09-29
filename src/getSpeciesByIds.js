const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const meuArray = [];

  if (ids.length === 0) {
    return meuArray;
  } return data.species.filter((specie) => ids.includes(specie.id));
}
module.exports = getSpeciesByIds;
