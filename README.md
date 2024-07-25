# PhytoTec

PhytoTec é uma aplicação full-stack para uma farmácia de plantas medicinais. O objetivo é fornecer uma interface intuitiva para listar e cadastrar plantas medicinais com todas as suas informações relevantes.

## Tecnologias Utilizadas

### Frontend:
- React
- Vite
- TypeScript
- Axios
- React Router

### Backend:
- Java
- Spring Boot
- Spring Data JPA
- H2 Database (ou outro banco de dados à sua escolha)

## Funcionalidades

### Frontend:
- Tela de Listagem: Renderiza uma lista de plantas medicinais.
- Tela de Cadastro: Formulário para adicionar novas plantas.

### Backend:
- GET /items: Retorna a lista de plantas cadastradas.
- POST /items: Adiciona uma nova planta à lista.
- GET /items/search: Pesquisa plantas por indicação.

## Como Executar

### Backend:
1. Navegue até a pasta `backend`.
2. Execute o comando `./mvnw spring-boot:run`.

### Frontend:
1. Navegue até a pasta `frontend`.
2. Execute o comando `npm install`.
3. Execute o comando `npm run dev`.

## Como Contribuir

1. Faça um fork do repositório.
2. Crie uma nova branch (`git checkout -b feature/nova-funcionalidade`).
3. Faça as suas alterações.
4. Faça um commit das suas alterações (`git commit -am 'Adiciona nova funcionalidade'`).
5. Faça o push para a branch (`git push origin feature/nova-funcionalidade`).
6. Abra um Pull Request.

## Documentação da API

### Endpoints

#### GET /items
Retorna a lista de plantas cadastradas.

#### POST /items
Recebe os dados do formulário e adiciona uma nova planta à lista.

#### GET /items/search
Pesquisa plantas por indicação.

## Critérios de Avaliação

1. Funcionalidade: A aplicação deve cumprir todos os requisitos funcionais descritos.
2. Usabilidade: A interface deve ser intuitiva e fácil de usar.
3. Código: O código deve ser bem estruturado e organizado.
4. Boas Práticas: Adoção de boas práticas de desenvolvimento tanto no front-end quanto no back-end.
