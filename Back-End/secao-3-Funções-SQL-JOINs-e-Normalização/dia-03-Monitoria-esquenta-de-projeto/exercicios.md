<!-- https://github.com/hellenribas/summer-for-all -->
1) Normalize a tabela Copa do Mundo
- Analise a tabela e, se necessário, separe os dados em outras tabelas


2) Crie uma query que exiba duas colunas
- Primeira: a quantidade de países sede com o nome países
- Segundo: a quantidade de países de títulos com o nome títulos
SELECT COUNT(distinct S.id) AS 'países', COUNT(distinct C.id) AS 'títulos' FROM Sede AS S, Campeao AS C;

3) Crie uma query que exiba duas colunas
- Primeira: Todos os países sede com o nome pais;
- Segunda: O ano de cada copa, organizar por ordem crescente de ano.
SELECT 
  P.pais, S.ano
FROM
  Sede AS S
    INNER JOIN
  Pais_sede AS P ON S.sede_id = P.id
ORDER BY S.ano ASC;  

4) Crie uma query que exiba duas colunas
- Primeira: todos os países sede com o nome sede
- Segundo: E países campeões com o nome campeão
- Dica: Lembre-se dos três tipos de JOINS: Left Join, Right Join e Inner Join. E escolha o melhor para esse caso
SELECT 
  Ps.pais AS sede, Pc.pais AS 'campeão', C.ano
FROM
  Copas AS C
    INNER JOIN
  Pais_campeao AS Pc ON C.campeao_id = Pc.id
    INNER JOIN
  Pais_sede AS Ps ON C.sede_id = Ps.id
ORDER BY C.ano;

5) Crie uma query que exiba a média de títulos entre os países campeões
SELECT 
  COUNT(*)/COUNT(distinct campeao_id) AS 'Média de titulos'
FROM
  Campeao;