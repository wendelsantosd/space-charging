<div>
<h1 align="center">
  Space Charging API
</h1>
</div>

<div align="center">

<img src="https://img.shields.io/badge/Typescript-5.1.3-3198c6">

<img src="https://img.shields.io/badge/NodeJS-18.17.1-026e00">

<img src="https://img.shields.io/badge/NestJS-10.1.17-ea2845">

<img src="https://img.shields.io/badge/GraphQL-16.8.1-e10098">

<img src="https://img.shields.io/badge/PostgreSQL-16.0.0-0069d9">

</div>

# Overview

Uma API simples para descobrir em quais exoplanetas podem instalados postos de carregamento e otimizar a experiência de recarga para os viajantes espaciais, construída com Nest.js, GraphQL, TypeScript e PostgreSQL.

# Instalação

1. Clonar o repositório:

```bash
git clone https://github.com/wendelsantosd/space-charging.git
```

2. Instalar as dependências:

```bash
yarn
```

3. Iniciar servidor de desenvolvimento:

```bash
yarn start:dev
```

# Observação para os próximos passos

Atente-se ao arquivo *env.example* que indica as variáveis de ambiente necessárias para o pleno funcionamento da aplicação.

# Configuração do banco de dados

1. Monte um banco postgres no ambiente do docker

```bash
yarn db:build
```

2. Atualize o banco

```bash
yarn db:update
```

# Enpoint

```bash
  http://localhost:3333/graphql
```

# Queries and Mutations

1. Suitable Planets

```bash
  query {
    suitablePlanets {
      name
      mass
      hasStation
    }
  }
```

2. Install Station

```bash
  mutation {
    installStation(data: {
      name: "estacao_1"
      planet: "11 Com b"
    })
  }
```

3. Stations

```bash
query {
  stations {
    id
    name
    planet
  }
}
```

4. Create User

```bash
  mutation {
    createUser(data:{
      name: "John Doe"
      email: "johnprovider@.com"
      password: "johnpassword"
    })
  }
```

5. Authenticate User

```bash
  query {
    authenticate(data:{
      email: "john@provider.com"
      password: "johnpassword"
    }) {
      token
    }
  }
```

6. Recharge

```bash
  mutation {
    recharge(data: {
      endTime: "2023-10-25 18:00"
      stationId: "0e459da2-53c3-46b9-83a0-c4c90aeb4c44"
      userId: "c3045047-0e97-486c-9267-e53b9add96aa"
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjMzA0NTA0Ny0wZTk3LTQ4NmMtOTI2Ny1lNTNiOWFkZDk2YWEiLCJpYXQiOjE2OTU2NTA3OTUsImV4cCI6MTcyNzIwODM5NX0.Y-JDZ6lGz-0npPAOCvBENPQPQL_6ng5FRIn0FgKsxYY"
    })
  }
```

7. Recharges

```bash 
  query {
    recharges {
      id
      startTime
      endTime
      stationId
      userId
    }
}
```

# Contato

<p style="font-size: 18px;">
Wendel Santos, 2023.
</p>
<p style="font-size: 18px;">
wendelwcsantos@gmail.com
</p>
