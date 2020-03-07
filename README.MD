# Docker para o Simulador Web

## Instruções

1.  Tenha certeza de ter o **Docker** e o **Docker-Compose** instalados;

2.  Baixe o projeto https://gitlab.com/SinnerAngel0/simulador-web.git para a pasta **frontend**;

3.  Rode o `npm install`;

4.  Realize o build do projeto `ng build`;

5.  Baixe o projeto https://gitlab.com/SinnerAngel0/simulador.git para a pasta **backend**;

6.  Alterar a conexão com o banco de dados `"DefaultConnection": "server=simulatorDb;port=3306;database=simulador;uid=root;password=root"`

7.  Na raiz do projeto execute `docker-compose build` e logo após `docker-compose up -d`;
