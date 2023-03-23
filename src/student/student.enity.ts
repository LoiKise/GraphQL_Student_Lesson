import { Field, ObjectType } from '@nestjs/graphql';
import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';

@Entity()
@ObjectType()
export class Student {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Field()
  @Column()
  firstName: string;

  @Field()
  @Column()
  lastName: string;
}
