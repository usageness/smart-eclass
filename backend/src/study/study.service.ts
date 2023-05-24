import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudyDto } from './dto/create-study.dto';
import { UpdateStudyDto } from './dto/update-study.dto';
import { Study } from './entities/study.entity';

@Injectable()
export class StudyService {
  constructor(
    @InjectRepository(Study)
    private usersRepository: Repository<Study>,
  ) {}

  async create({
    studyname,
    teacher,
    students = '',
    comments = '',
    isopen = true,
  }: CreateStudyDto) {
    const newStudy = await this.usersRepository.create({
      studyname,
      teacher,
      students,
      comments,
      isopen,
    });
    await this.usersRepository.save(newStudy);

    return newStudy;
  }

  // findAll() {
  //   return `This action returns all study`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} study`;
  // }

  // update(id: number, updateStudyDto: UpdateStudyDto) {
  //   return `This action updates a #${id} study`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} study`;
  // }
}
