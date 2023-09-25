import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Station {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  planet: string;
}
