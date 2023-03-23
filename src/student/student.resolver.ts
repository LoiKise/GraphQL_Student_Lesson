import { StudentInput } from './dto/student.input';
import { Student } from './student.enity';
import { StudentService } from './student.service';
import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Mutation((returns) => Student)
  async createStudent(
    @Args('studentInput')
    studentInput: StudentInput,
  ): Promise<Student> {
    return this.studentService.createStudent(studentInput);
  }

  @Query((returns) => [Student])
  async getAllStudents(): Promise<Student[]> {
    return this.studentService.getAllStudents();
  }

  @Query((returns) => Student)
  async getOneStudent(@Args('id') id: string): Promise<Student> {
    return this.studentService.getStudentById(id);
  }
}
