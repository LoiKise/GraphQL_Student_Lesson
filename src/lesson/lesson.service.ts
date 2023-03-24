import { LessonInput } from './dto/lesson.input';
import { Lesson } from './lesson.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson)
    private lessonRepository: Repository<Lesson>,
  ) {}

  async createLesson(lessonInput: LessonInput): Promise<Lesson> {
    const { name, startDate, endDate, students } = lessonInput;

    const lesson = this.lessonRepository.create({
      name,
      startDate,
      endDate,
      students,
    });
    console.log(lesson);
    return this.lessonRepository.save(lesson);
  }

  async getAllLesson(): Promise<Lesson[]> {
    return this.lessonRepository.find();
  }

  async getLessonById(id: string): Promise<Lesson> {
    return this.lessonRepository.findOne({ where: { id } });
  }

  async assignStudentsToLesson(
    lessonId: string,
    studentIds: string[],
  ): Promise<Lesson> {
    const lesson = await this.lessonRepository.findOne({
      where: { id: lessonId },
    });
    lesson.students = [...lesson.students, ...studentIds];
    console.log(lesson, 'lesson');
    return this.lessonRepository.save(lesson);
  }
}
