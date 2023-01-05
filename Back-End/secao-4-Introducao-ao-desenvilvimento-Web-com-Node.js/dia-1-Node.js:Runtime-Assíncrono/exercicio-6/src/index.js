const fs = require('fs').promises;
const readline = require('readline-sync');

async function getSimpsons(archive) {
  const data = await fs.readFile(`./src/${archive}.json`, 'utf-8');
  const simpsons = JSON.parse(data);
  return simpsons;
}

// A - Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome. Por exemplo: 1 - Homer Simpson
// async function readAll() {
//   const simpsons = await getSimpsons('simpsons');
//   simpsons.map(({id, name}) => console.log(`${id} - ${name}`));
// }
// readAll();

// B - Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo “id não encontrado”.
// async function getSimpsonsById() {
//   const simpsons = await getSimpsons('simpsons');
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
// async function filterSimpsons() {
//   const simpsons = await getSimpsons('simpsons');
//   const newSimpsons = simpsons.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');
//   console.log(newSimpsons);
// }
// filterSimpsons();

// D - Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json, contendo as personagens com id de 1 a 4.
// async function createSimpsonsFamily() {
//   const simpsons = await getSimpsons('simpsons');
//   const arrSimpsonsIds = [1, 2, 3, 4];
//   const simpsonsFamily = simpsons.filter((simpson) => arrSimpsonsIds.includes(Number(simpson.id)));
//   await fs.writeFile('./src/simpsonsFamily.json', JSON.stringify(simpsonsFamily));
//   console.log(simpsonsFamily);
// }
// createSimpsonsFamily();

// E - Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.
// async function addSimpsonToFamily() {
//   const family = await getSimpsons('simpsonsFamily');
//   const newFamily = [...family, {id: "5", name: "Nelson Muntz"}];
//   await fs.writeFile('./src/simpsonsFamily.json', JSON.stringify(newFamily));
//   console.log(newFamily);
// }
// addSimpsonToFamily();

// F - Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json.
async function replaceSimpson() {
  const family = await getSimpsons('simpsonsFamily');
  const index = family.findIndex((t) => t.name == 'Nelson Muntz');
  const newMember = {id: (index+1).toString(), name: 'Maggie Simpson'};
  const newFamily = family.filter((simpson) => simpson.name !== 'Nelson Muntz');
  newFamily.splice(index, 0, newMember);
  await fs.writeFile('./src/simpsonsFamily.json', JSON.stringify(newFamily));
}
replaceSimpson();