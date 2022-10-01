- Quais problemas GraphQl resolve
  - Overfetching (Buscar informações demais)
    - http://localhost:3000/users
      -DB (usuários, endereços)
  - Underfetching (Buscar dados de menos)
    - http://localhost:3000/users
      -DB (usuários)
    - http://localhost:3000/addresses

// http://localhost:3000/graphql

Dificuldades:
  - Cache
  - Erros (sempre retorna 200)

```gql

query {
  users {
    id
    name
    github

    addresses {
      city
      state
      country
    }
  }
}

```

http://localhost:3000/users

Cache-control: 5 segundos

http://localhost:3000/graphql

