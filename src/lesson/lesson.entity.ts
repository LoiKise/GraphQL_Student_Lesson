import { Student } from './../student/student.enity';
import { Field, ObjectType } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Lesson {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  startDate: string;

  @Column()
  @Field()
  endDate: string;

  @Column('varchar', { array: true, nullable: true })
  @Field((type) => [Student], { nullable: true })
  students?: string[];
}
