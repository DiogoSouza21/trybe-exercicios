const fs = require('fs').promises;
const readline = require('readline-sync');

async function getSimpsons() {
  const data = await fs.readFile('./src/simpsons.json', 'utf-8');
  const simpsons = JSON.parse(data);
  return simpsons;
}

// A - Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome. Por exemplo: 1 - Homer Simpson
// async function readAll() {
//   const simpsons = await getSimpsons();
//   simpsons.map(({id, name}) => console.log(`${id} - ${name}`));
// }
// readAll();

// B - Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo “id não encontrado”.
// async function getSimpsonsById() {
//   const simpsons = await getSimpsons();
//   const idSimpson = () => readline.question('Busca por id: ');
//   const id = idSimpson();
//   const chosenSimpson = simpsons.find((simpson) => Number(simpson.id) === Number(id));
//   if (!chosenSimpson) {
//     throw new Error('id não encontrado');
//   }
//   const searchSimpson = simpsons.find((simpson) => Number(simpson.id) === Number(id));
//   console.log(`${searchSimpson.id} - ${searchSimpson.name}`);
// }
// getSimpsonsById();

// C - Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
async function filterSimpsons() {
  const simpsons = await getSimpsons();
  const newSimpsons = simpsons.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');
  console.log(newSimpsons);
}
filterSimpsons();

// D - Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json, contendo as personagens com id de 1 a 4.

// E - Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.

// F - Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json.