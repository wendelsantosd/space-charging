import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Exoplanet {
  @Field()
  pl_name: string;

  @Field()
  pl_bmassj: number;
}
