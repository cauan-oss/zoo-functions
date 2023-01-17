const data = require("../data/zoo_data");

const getAnimalsOlderThan = (specie, idade) => {
    const treino = data.species.find((animal) => specie === animal.name );
    return treino.residents.map((reside) => reside.age )
};
const specieAge = data.species.map((list) => list.residents )


console.log(getAnimalsOlderThan('lions'));


/*deve receber uma especie e uma idade como parametro
ira fazer a comparacao se o animal e a idade passada no parametro tem a idade minima */