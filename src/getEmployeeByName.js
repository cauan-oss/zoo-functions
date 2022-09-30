const data = require('../data/zoo_data');

function getEmployeeByName(...employeeName) {
  if (employeeName.length === 0) return {};
  return data.employees.find((manager) => employeeName.includes(manager.firstName) || employeeName.includes(manager.lastName));
}
console.log(getEmployeeByName());
module.exports = getEmployeeByName;
