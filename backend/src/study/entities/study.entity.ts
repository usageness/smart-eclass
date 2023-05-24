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
  students: string;

  @Column()
  comments: string;

  @Column()
  isopen: boolean;
}
