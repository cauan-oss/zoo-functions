const data = require("../data/zoo_data");

const getAnimalsOlderThan = (specie, idade) => {
    const checkSpecie = data.species.find((animal) => specie === animal.name);
   return checkSpecie.residents.every((age) =>  idade >= age.age)
    
};
const specieAge = data.species.map((list) => list.residents )


console.log(getAnimalsOlderThan('bears', 12));


/*deve receber uma especie e uma idade como parametro
ira fazer a comparacao se o animal e a idade passada no parametro tem a idade minima

aprendendo um pouco mais de como pegar uma chave que esta dentro de um array de objetos que esta 
dentro de outro array de objetos

*/