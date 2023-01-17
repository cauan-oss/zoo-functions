const data = require('../data/zoo_data');

const getEmployeeByName = (...param) => {

  const objEmpty = {};
  if (param.length === 0) {
    return objEmpty
  } return data.employees.find((empt) => empt.firstName || empt.lastName)
}

console.log(getEmployeeByName('Nilgen'))