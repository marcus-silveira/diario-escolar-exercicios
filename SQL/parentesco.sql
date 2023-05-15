USE escola;

CREATE TABLE parentesco (
  IdResponsavel INT NOT NULL,
  IdAluno INT NOT NULL,
  parentesco VARCHAR(30),
  FOREIGN KEY (IdResponsavel) REFERENCES responsavel(Id),
  FOREIGN KEY (IdAluno) REFERENCES aluno(Id)
);
