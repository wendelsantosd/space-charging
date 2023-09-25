import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateStationInput {
  @Field()
  name: string;

  @Field()
  planet: string;
}
