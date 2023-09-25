import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AuthenticateUser {
  @Field()
  token: string;

  @Field()
  expiresIn: string;
}
