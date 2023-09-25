import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Exoplanet {
  @Field()
  name: string;

  @Field()
  mass: number;
}
