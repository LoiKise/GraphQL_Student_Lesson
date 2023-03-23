import { Field, InputType, ID } from '@nestjs/graphql';

@InputType()
export class AssginStudentToLessonInput {
  @Field((type) => ID)
  lessonId: string;

  @Field((type) => [ID])
  studentIds: string[];
}
