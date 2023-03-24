import { LessonInput } from './dto/lesson.input';
import { Lesson } from './lesson.entity';
import { LessonService } from './lesson.service';
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { AssginStudentToLessonInput } from './dto/assignStudentToLesson.input';
import { StudentService } from 'src/student/student.service';

@Resolver((of) => Lesson)
export class LessonResolver {
  constructor(
    private lessonService: LessonService,
    private studentService: StudentService,
  ) {}

  @Query((returns) => [Lesson])
  getlessons(): Promise<Lesson[]> {
    return this.lessonService.getAllLesson();
  }

  @Query((returns) => Lesson)
  getLesson(@Args('id') id: string): Promise<Lesson> {
    return this.lessonService.getLessonById(id);
  }

  @Mutation((returns) => Lesson)
  async createLesson(
    @Args('lessonInput') lessonInput: LessonInput,
  ): Promise<Lesson> {
    return this.lessonService.createLesson(lessonInput);
  }

  @Mutation((returns) => Lesson)
  async assginStudentToLesson(
    @Args('assginStudentToLesson')
    assginStudentToLessonInput: AssginStudentToLessonInput,
  ) {
    const { lessonId, studentIds } = assginStudentToLessonInput;
    return this.lessonService.assignStudentsToLesson(lessonId, studentIds);
  }

  @ResolveField()
  async students(@Parent() lesson: Lesson) {
    console.log(lesson);
    return this.studentService.getManyStudents(lesson.students);
  }
}
