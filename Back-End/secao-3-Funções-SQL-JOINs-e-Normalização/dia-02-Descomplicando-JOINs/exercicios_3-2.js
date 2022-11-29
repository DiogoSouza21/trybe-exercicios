// Exercício 1: Utilizando o INNER JOIN, encontre as vendas nacionais (domestic_sales) e internacionais (international_sales) de cada filme.
SELECT
  M.title AS Filme,
  B.domestic_sales AS 'Vendas nacionais',
  B.international_sales AS 'Vendas internacionais'
FROM 
  pixar.box_office AS B
INNER JOIN
  pixar.movies AS M ON B.movie_id = M.id
ORDER BY Filme;

// 🚀 Exercício 2: Utilizando o INNER JOIN, faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais (international_sales) do que vendas nacionais (domestic_sales).
SELECT
  M.title AS Filme,
  (B.domestic_sales + B.international_sales) AS vendas
FROM 
  pixar.box_office AS B
INNER JOIN
  pixar.movies AS M ON B.movie_id = M.id
WHERE B.international_sales > B.domestic_sales
ORDER BY vendas;

// 🚀 Exercício 3: Utilizando o INNER JOIN, faça uma busca que retorne os filmes e sua avaliação (rating) em ordem decrescente.
SELECT
  M.title AS Filme,
  B.rating AS avaliacao
FROM 
  pixar.box_office AS B
INNER JOIN
  pixar.movies AS M ON B.movie_id = M.id
ORDER BY avaliacao DESC;

// Exercício 4: Utilizando o LEFT JOIN, faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.
SELECT
  T.*,
  M.*
FROM 
  pixar.theater AS T
LEFT JOIN
  pixar.movies AS M ON T.id = M.theater_id
ORDER BY T.name;

// Exercício 5: Utilizando o RIGHT JOIN, faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.
SELECT
  T.*,
  M.*
FROM 
    pixar.theater AS T
RIGHT JOIN
    pixar.movies AS M ON T.id = M.theater_id
ORDER BY T.name;

// 🚀 Exercício 6: Utilizando o INNER JOIN, selecione todas as informações dos filmes que estão em cartaz (possuem theater_id diferente de NULL) com avaliação maior que 8.
SELECT 
  M.*, B.rating
FROM
  pixar.movies AS M
    INNER JOIN
  pixar.box_office AS B ON M.id = B.movie_id
WHERE
  B.rating > 8
    AND M.theater_id IS NOT NULL;