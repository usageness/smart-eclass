import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Study {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  studyname: string;

  @Column()
  teacher: string;

  @Column()
  introduction: string;

  @Column('text')
  class: string;

  @Column()
  students: string;

  @Column()
  isopen: boolean;
}
