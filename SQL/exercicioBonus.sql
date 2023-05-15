SELECT a.id AS aluno_id, a.Nome AS aluno_nome, r.id AS responsavel_id, r.Nome AS responsavel_nome, p.Parentesco
FROM aluno a
JOIN parentesco p ON a.id = p.IdAluno
JOIN responsavel r ON p.IdResponsavel = r.id;
