import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudyDto } from './dto/create-study.dto';
import { GetStudyDto } from './dto/get-study.dto';
import { UpdateStudyDto } from './dto/update-study.dto';
import { Study } from './entities/study.entity';

@Injectable()
export class StudyService {
  constructor(
    @InjectRepository(Study)
    private studyRepository: Repository<Study>,
  ) {}

  async create({
    studyname,
    teacher,
    students = '[]',
    comments = '',
    introduction = '',
    isopen = true,
  }: CreateStudyDto) {
    const newStudy = await this.studyRepository.create({
      studyname,
      teacher,
      students,
      comments,
      introduction,
      isopen,
    });
    await this.studyRepository.save(newStudy);

    return newStudy;
  }

  async findMyAll({ userid }: GetStudyDto) {
    const studyInTeacher = await this.studyRepository.find({
      where: { teacher: userid },
    });
    const studyInStudents = await this.studyRepository.find({
      where: { students: userid },
    });

    return { teacher: studyInTeacher, students: studyInStudents };
  }

  async findAll() {
    const entireStudy = await this.studyRepository.find();

    return entireStudy;
  }

  async findOne(id: number) {
    const study = await this.studyRepository.findOne({ where: { id } });
    return study;
  }

  // update(id: number, updateStudyDto: UpdateStudyDto) {
  //   return `This action updates a #${id} study`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} study`;
  // }
}
