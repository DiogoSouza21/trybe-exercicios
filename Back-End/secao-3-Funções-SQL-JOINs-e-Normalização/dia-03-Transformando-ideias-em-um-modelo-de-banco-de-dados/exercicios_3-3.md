Exercício 1: 🚀 Normalize a tabela a seguir para a 1ª Forma Normal.
R: Tabela.png, FN1.png e Tabela na FN1.png

Exercício 2: 🚀 Usando a estrutura (já normalizada para 1ª Forma Normal) da tabela anterior, transforme-a agora na 2ª Forma Normal.
R: FN2.png e Tabela na FN2.png

Exercício 3: 🚀 Monte uma query que:
Crie um banco de dados chamado normalization;
Crie todas as tabelas resultantes do exercício 2 (na 2ª Forma Normal);
Popule todas as tabelas com os dados fornecidos nos exercícios.
R: normalization.sql

Exercício 1: 🚀 Um zoológico precisa de um banco de dados para armazenar informações sobre os seus animais. As informações a serem armazenadas sobre cada animal são:

Nome;
Espécie;
Sexo;
Idade;
Localização.

Cada animal também possui vários cuidadores, e cada cuidador pode ser responsável por mais de um animal. Além disso, cada cuidador possui um gerente, sendo que cada gerente pode ser responsável por mais de um cuidador.

R: Tabelas de relacionamentos - zoológico.png e zoo.sql
R:
Entidades
1 - Animal;
2 - Cuidador;
3 - Gerente;
4 - Cuidador e animal.

Atributos
Animal - id, nome, especiem, sexo, idade, localizacao;
Cuidador - id, nome, gerente_id;
Gerente - id, nome;
Cuidador_animal - cuidador_id, animal_id.

Relacionamentos
- Um animal pode ter um ou mais cuidadores, um cuidador pode cuidar de um ou mais animais; (N:N)
- Um gerente pode gerenciar um ou mais cuidadores, mas um cuidador possui apenas um gerente. (1:N)

Exercício 2: 🚀 Converta a tabela desnormalizada para a 1ª Forma Normal.
R: exercicio2_não-normalizada.png e exercicio2_normalizada-FN1.png

Exercício 3: 🚀 Converta a tabela desnormalizada (que já está nos padrões da 1ª Forma Normal) para a 2ª Forma Normal.
R: exercicio3_não-normalizada.png e exercicio3_normalizada-FN2.png

Exercício 4: 🚀 Agora, converta essa outra tabela (que já está nos moldes das duas primeiras formas) para a 3ª Forma Normal.
R:
