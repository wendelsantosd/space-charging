import { RechargeResolver } from '@modules/recharge/api/resolvers/recharge.resolver';
import { StationResolver } from '@modules/station';
import { UserResolver } from '@modules/user';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
  ],
  controllers: [],
  providers: [StationResolver, UserResolver, RechargeResolver],
})
export class AppModule {}
