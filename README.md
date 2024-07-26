# PhytoTec

PhytoTec é uma aplicação full-stack para uma farmácia de plantas medicinais. O objetivo é fornecer uma interface intuitiva para listar e cadastrar plantas medicinais com todas as suas informações relevantes.

## Tecnologias Utilizadas

### Frontend:
- React
- Vite
- TypeScript
- Axios
- React Router
- Bootstrap
- React-Bootstrap

### Backend:
- Java
- Spring Boot
- Spring Data JPA
- H2 Database (dev)
- PostgreSQL (prod)

## Funcionalidades

### Frontend:
- Tela de Listagem: Exibe uma lista de plantas medicinais cadastradas.
- Tela de Cadastro: Permite o cadastro de novas plantas com nome, indicação, descrição e URL da imagem.
- Pesquisa: Permite buscar plantas por indicação.

### Backend:
- GET /plants: Retorna a lista de plantas cadastradas.
- POST /plants: Recebe os dados do formulário e adiciona uma nova planta à lista.
- GET /plants/search: Pesquisa plantas por indicação.

## Documentação da API

### Endpoints

#### GET /items
Retorna a lista de plantas cadastradas.

#### POST /items
Recebe os dados do formulário e adiciona uma nova planta à lista.

#### GET /items/search
Pesquisa plantas por indicação.

## Configuração do Ambiente de Desenvolvimento

### Banco de Dados: H2  ou PostgreSQL 

O H2 é um banco de dados em memória ou arquivo que é ótimo para desenvolvimento e testes rápidos.

### Arquivos SQL
--dump.sql--
O arquivo dump.sql contém um backup dos dados do banco de dados. Para restaurar os dados, execute o seguinte comando:

mysql -u postegres -p plants < dump.sql

--V1__create-table-plants.sql--
O arquivo V1__create-table-plants.sql é uma migração que cria a tabela plants. Para aplicar essa migração, execute:

mysql -u postgres -p plants < V1__create-table-plants.sql


