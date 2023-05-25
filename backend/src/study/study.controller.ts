import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Headers,
  Res,
  HttpStatus,
  ConsoleLogger,
} from '@nestjs/common';
import { StudyService } from './study.service';
import { CreateStudyDto } from './dto/create-study.dto';
import { UpdateStudyDto } from './dto/update-study.dto';
import UsersService from '../users/users.service';

@Controller('study')
export class StudyController {
  constructor(
    private readonly studyService: StudyService,
    private readonly usersService: UsersService,
  ) {}

  @Post()
  async createStudy(
    @Headers('Authorization') authHeader: string,
    @Body() createStudyDto: CreateStudyDto,
    @Res() res,
  ): Promise<void> {
    const { userid } = await this.usersService.getProfile(authHeader);
    createStudyDto.teacher = userid;
    const study = await this.studyService.create(createStudyDto);
    res.status(HttpStatus.CREATED).send(study);
  }

  @Get()
  async findAll(@Headers('Authorization') authHeader: string, @Res() res) {
    const { userid } = await this.usersService.getProfile(authHeader);

    const study = await this.studyService.findAll({ userid });
    res.status(HttpStatus.OK).send(study);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res) {
    const study = await this.studyService.findOne(+id);
    res.status(HttpStatus.OK).send(study);
  }

  // @Post()
  // create(@Body() createStudyDto: CreateStudyDto) {
  //   return this.studyService.create(createStudyDto);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateStudyDto: UpdateStudyDto) {
  //   return this.studyService.update(+id, updateStudyDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.studyService.remove(+id);
  // }
}
