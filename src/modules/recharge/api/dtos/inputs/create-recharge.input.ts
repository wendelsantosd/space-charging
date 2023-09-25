import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateRechargeInput {
  @Field()
  name: string;

  @Field()
  startTime: Date;

  @Field()
  endTime: Date;

  @Field()
  stationId: string;

  @Field()
  userId: string;
}
