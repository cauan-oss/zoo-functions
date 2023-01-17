const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  if(ids === 0) {
    return []
  } return data.species.filter((specie) =>  ids.includes(specie.id))
                                               /*  |
                                                   |
                                                   v
                                                aqui ele esta verificando se 
                                                oque esta no parametro esta incluido no array, se estiver 
                                                vai retornar a chave id, de especies*/
} 


console.log(getSpeciesByIds())
