-- 1) Escreva comandos SQL para inserir os dados abaixo conforme o diagrama
-- apresentado.
-- a) Pablo é Pai de Lucas
-- b) Brenda é Mãe de Lucas

-- Insere o aluno na tabela
INSERT INTO aluno(nome) VALUES
 ('Lucas'),
 ('Sophia');

-- Insere os responsaveis na tabela
INSERT INTO responsavel(nome) VALUES
 ('Pablo'),
 ('Brenda'),
 ('Claudia'),
 ('Marcus'),
 ('Ana'),
 ('Isabel');


 -- Insere o parentesco dos responsáveis
 INSERT INTO parentesco (IdResponsavel, IdAluno, parentesco) VALUES 
  (1, 1, 'Pai'),
  (2, 1, 'Mãe'),
  (3, 1, 'Avó'),
  (4, 2, 'Pai'),
  (5, 2, 'Mãe'),
  (6, 2, 'Avó');
