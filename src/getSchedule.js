const { hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const meuArray = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];

function nomefuncao(scheduleTarget) {
  const arrayVazio = [];
  data.species.forEach((pega) => {
    if (scheduleTarget === pega.name) {
      const agua = data.species.find((animal) => scheduleTarget === animal.name);
      arrayVazio.push(agua.availability);
    }
  });
  return arrayVazio.flat(1);
}

const meuOBj = {};
meuArray.forEach((dia) => {
  meuOBj[dia] = {
    officeHour: `Open from ${Object.entries(hours)
      .find((hour) => hour[0] === dia)[1]
      .open}am until ${Object.entries(hours).find((hour) => hour[0] === dia)[1].close}pm`,
    exhibition: data.species.filter((exibe) =>
      exibe.availability.includes(dia)).map((nome) => nome.name),
  };
  if (dia === 'Monday') {
    meuOBj[dia].officeHour = 'CLOSED';
    meuOBj[dia].exhibition = 'The zoo will be closed!';
  }
});

function justDay(scheduleTarget) {
  const objVazio = {};
  objVazio[scheduleTarget] = meuOBj[scheduleTarget];
  return objVazio;
}
function getSchedule(scheduleTarget) {
  if (meuArray.includes(scheduleTarget)) return justDay(scheduleTarget);
  if (data.species.some((very) => scheduleTarget === very.name)) return nomefuncao(scheduleTarget);
  return meuOBj;
}
module.exports = getSchedule;
