import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Comments {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userid: string;

  @Column()
  username: string;

  @Column()
  content: string;

  @Column()
  Study_id: string;
}
