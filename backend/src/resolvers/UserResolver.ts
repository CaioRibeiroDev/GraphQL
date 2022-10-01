import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { User } from "../models/User"
import crypto, { randomUUID } from 'crypto'

// query: Buscar dados
// mutation: Criar, alterar ou deletar

@Resolver()
export class UserResolver {
  private data: User[] = [];

  @Query(() => [User])
  async users() {
    return this.data
  }

  @Mutation(() => User)
  async createUser(
    @Arg('name') name: string
  ) {
    const user = { id: randomUUID(), name }

    this.data.push(user)

    return user;
  }
}