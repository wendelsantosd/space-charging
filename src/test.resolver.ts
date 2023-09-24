import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class TestResolver {
  @Query(() => String)
  test() {
    return 'Working';
  }
}
