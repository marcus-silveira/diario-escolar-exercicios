SELECT a.nome AS 'ALUNO', r1.nome AS 'RESPONSAVEL', p1.parentesco AS 'PARENTESCO', r2.nome AS 'RESPONSAVEL', p2.parentesco AS 'PARENTESCO'
FROM aluno a
LEFT JOIN (
    SELECT IdAluno, IdResponsavel, parentesco
    FROM parentesco
    WHERE (IdAluno, IdResponsavel) IN (
        SELECT IdAluno, MIN(IdResponsavel)
        FROM parentesco
        GROUP BY IdAluno
    )
) p1 ON a.id = p1.IdAluno
LEFT JOIN responsavel r1 ON p1.IdResponsavel = r1.id
LEFT JOIN (
    SELECT IdAluno, IdResponsavel, parentesco
    FROM parentesco
    WHERE (IdAluno, IdResponsavel) IN (
        SELECT IdAluno, MIN(IdResponsavel)
        FROM parentesco
        WHERE (IdAluno, IdResponsavel) NOT IN (
            SELECT IdAluno, MIN(IdResponsavel)
            FROM parentesco
            GROUP BY IdAluno
        )
        GROUP BY IdAluno
    )
) p2 ON a.id = p2.IdAluno
LEFT JOIN responsavel r2 ON p2.IdResponsavel = r2.id;