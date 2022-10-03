const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  const meuObj = {};
  if (!animal) {
    species.forEach((sp) => {
      meuObj[sp.name] = sp.residents.length;
    });
    return meuObj;
  }
  const agua = species.find((spc) => animal.specie === spc.name).residents;
  if (!animal.sex) return agua.length;

  const limao = agua.filter((cc) => cc.sex === animal.sex);
  return limao.length;
}
countAnimals({specie: 'lions', sex: 'male'})
module.exports = countAnimals