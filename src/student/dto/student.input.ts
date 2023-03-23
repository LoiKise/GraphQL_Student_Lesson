import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class StudentInput {
  @Field()
  firstName: string;

  @Field()
  lastName: string;
}
