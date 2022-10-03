const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  if (!managerId) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const myArray = [];
  data.employees.forEach((employee) => {
    if (employee.managers.includes(managerId)) {
      myArray.push(`${employee.firstName} ${employee.lastName}`);
    }
  });
  return myArray;
}

console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));
module.exports = { isManager, getRelatedEmployees };
