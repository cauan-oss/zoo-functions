const { prices } = require('../data/zoo_data');
/* const data = require('../data/zoo_data');
 */
/* const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
]; */

function countEntrants(entrants) {
  const meuObj = {};
  const crianca = entrants.filter((personChild) => personChild.age < 18);
  const adulto = entrants.filter((personAdult) => personAdult.age >= 18 && personAdult.age < 50);
  const senhor = entrants.filter((personSenior) => personSenior.age >= 50);
  meuObj.child = crianca.length;
  meuObj.adult = adulto.length;
  meuObj.senior = senhor.length;

  return meuObj;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }

  const recebe = countEntrants(entrants);
  let total = 0;

  total += recebe.child * prices.child;
  total += recebe.adult * prices.adult;
  total += recebe.senior * prices.senior;
  return total;
}

/* console.log(calculateEntry(entrants)); */
module.exports = { calculateEntry, countEntrants };
//refazendo o projeto zoo functions 