import { Field, InputType, ID } from '@nestjs/graphql';

@InputType()
export class LessonInput {
  @Field()
  name: string;

  @Field()
  startDate: string;

  @Field()
  endDate: string;

  @Field(() => [ID], { defaultValue: [] })
  students: string[];
}
