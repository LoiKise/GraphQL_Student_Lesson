import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class LessonInput {
  @Field()
  name: string;

  @Field()
  startDate: string;

  @Field()
  endDate: string;
}
