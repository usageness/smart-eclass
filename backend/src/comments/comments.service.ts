import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCommentsDto } from './dto/create-comments.dto';
// import { GetStudyDto } from './dto/get-study.dto';
// import { UpdateStudyDto } from './dto/update-study.dto';
import { Comments } from './entities/comments.entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comments)
    private commentsRepository: Repository<Comments>,
  ) {}

  async create(createCommentsDto: CreateCommentsDto) {
    const newComments = await this.commentsRepository.create(createCommentsDto);
    await this.commentsRepository.save(newComments);

    return newComments;
  }

  // async findMyAll({ userid }: GetStudyDto) {
  //   const studyInTeacher = await this.studyRepository.find({
  //     where: { teacher: userid },
  //   });
  //   const studyInStudents = await this.studyRepository.find({
  //     where: { students: userid },
  //   });

  //   return { teacher: studyInTeacher, students: studyInStudents };
  // }

  // async findAll() {
  //   const entireStudy = await this.studyRepository.find();

  //   return entireStudy;
  // }

  // async findOne(id: number) {
  //   const study = await this.studyRepository.findOne({ where: { id } });
  //   return study;
  // }

  // update(id: number, updateStudyDto: UpdateStudyDto) {
  //   return `This action updates a #${id} study`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} study`;
  // }
}
