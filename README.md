# :construction: README customizado em construção ! :construction:
<!-- 
Requisito 1 
Implemente a função getSpeciesByIds para buscar as espécies dos animais por meio de um ID e retorne um array contendo todos os animais dessa espécie.

Faça com que a função getSpeciesByIds possa receber vários parâmetros;

Retorne um array vazio se a função não receber um id;

Retorne as seguintes informações do arquivo data:

Se a função receber apenas um id, retorne a espécie do animal referente a este id;

Se a função receber vários ids, retorne todas as espécies referente a esses ids.

O que será testado:

A função getSpeciesByIds, caso não receba nenhum parâmetro, deve retornar um array vazio;

A função getSpeciesByIds, caso receba como parâmetro um único ID, deve retornar um array com a espécie referente a esse ID;

A função getSpeciesByIds, caso receba mais de um ID, deve retornar um array com as espécies referentes aos IDs.

Requisito 2
Implemente a função getAnimalsOlderThan que deve receber uma espécie e uma idade como parâmetro, e então retornar se todos os animais dessa espécie possuem essa idade ou são mais velhos.

Verifique se todos os animais da espécie passada como parâmetro possuem a idade mínima:

Os animais devem ter essa idade ou serem mais velhos.
Retorne um valor booleano.

O que será testado:

A função, ao receber uma espécie e uma idade como parâmetros, deve testar se todos os animais desta espécie possuem a idade mínima especificada.

Requisito 3 
Implemente a função getEmployeeByName que deve buscar por pessoas colaboradoras através de seu primeiro ou último nome.

Retorne um objeto vazio caso a função não receba parâmetros;

Retorne as informações da pessoa colaboradora caso o parâmetro seja igual ao nome ou igual ao último nome no seguinte formato:
O que será testado:

A função deve retornar um objeto vazio caso não receba parâmetros;

A função deve retornar o objeto da pessoa colaboradora caso receba o seu primeiro nome como parâmetro;

A função deve retornar o objeto da pessoa colaboradora caso receba o seu último nome como parâmetro.

Requisito 4 
Implemente a função getRelatedEmployees para verificar se uma pessoa colaboradora é gerente e quais pessoas ela lidera.

Considerando a boa prática de dividir o código em partes menores, o arquivo terá duas funções:
A função isManager será responsável por verificar se uma pessoa colaboradora é gerente:

Deve retornar true se o id passado for de uma pessoa gerente;
Deve retornar false se o id passado não for de uma pessoa gerente.
A função getRelatedEmployees será responsável por retornar as pessoas lideradas pela gerência:

Utilize a função isManager para verificar se a pessoa é gerente ou não e fazer as seguintes verificações:

Caso a pessoa seja gerente, retorne um array contendo nome e sobrenome das pessoas colaboradoras gerenciadas por essa pessoa.
Exemplo de output:

Caso a pessoa não seja gerente, dispare um erro com a mensagem: 'O id inserido não é de uma pessoa colaboradora gerente!'.
Para lançar o erro, você vai utilizar a função construtora Error da biblioteca padrão do JavaScript.

Exemplo:

throw  new  Error('O id inserido não é de uma pessoa colaboradora gerente!');
Você pode ler mais sobre a função construtora Error, neste link.

O que será testado:

A função isManager deve retornar true se o ID passado for de uma pessoa gerente;

A função isManager deve retornar false se o ID passado não for de uma pessoa gerente;

A função getRelatedEmployees, caso o ID passado for da pessoa gerente, deve retornar um array contendo nome e sobrenome das pessoas colaboradoras pelas quais ela é responsável;

A função getRelatedEmployees, caso o ID passado não for da pessoa gerente, deve disparar um erro com a mensagem: 'O id inserido não é de uma pessoa colaboradora gerente!'.
-->
