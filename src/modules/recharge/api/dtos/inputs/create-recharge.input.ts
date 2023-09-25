import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateRechargeInput {
  @Field()
  endTime: string;

  @Field()
  stationId: string;

  @Field()
  userId: string;

  @Field()
  token: string;
}
