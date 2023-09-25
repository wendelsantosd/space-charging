import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Recharge {
  @Field()
  id: string;

  @Field()
  startTime: Date;

  @Field()
  endTime: Date;

  @Field()
  stationId: string;

  @Field()
  userId: string;
}
