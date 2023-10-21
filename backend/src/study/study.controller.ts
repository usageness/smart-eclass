import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Headers,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { StudyService } from './study.service';
import { CreateStudyDto } from './dto/create-study.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import UsersService from '../users/users.service';
import { CreateContentsClassDto } from './dto/addContents-class-dto';
import { CreateChapterClassDto } from './dto/createChapter-class.dto';

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

  @Get('/all')
  async findAll(@Res() res) {
    const study = await this.studyService.findAll();
    res.status(HttpStatus.OK).send(study);
  }

  @Get()
  async findMyAll(@Headers('Authorization') authHeader: string, @Res() res) {
    const { userid } = await this.usersService.getProfile(authHeader);

    const study = await this.studyService.findMyAll({ userid });
    res.status(HttpStatus.OK).send(study);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res) {
    const study = await this.studyService.findOne(+id);
    res.status(HttpStatus.OK).send(study);
  }

  @Post('/join/:id')
  async join(
    @Headers('Authorization') authHeader: string,
    @Param('id') id: number,
    @Res() res,
  ) {
    const { userid } = await this.usersService.getProfile(authHeader);

    const study = await this.studyService.join({ userid, id });
    res.status(HttpStatus.OK).send(study);
  }

  @Patch(':id')
  async update(
    @Headers('Authorization') authHeader: string,
    @Param('id') id: number,
    @Body() { stringifyClass }: UpdateClassDto,
    @Res() res,
  ) {
    const { userid } = await this.usersService.getProfile(authHeader);

    const study = await this.studyService.updateClass({
      userid,
      id,
      stringifyClass,
    });
    res.status(HttpStatus.OK).send(study);
  }

  @Post('/contents/:id')
  async createContents(
    @Headers('Authorization') authHeader: string,
    @Param('id') id: number,
    @Body() { chapterIndex, stringifyContents }: CreateContentsClassDto,
    @Res() res,
  ) {
    const { userid } = await this.usersService.getProfile(authHeader);

    const classes = await this.studyService.createClassContents({
      chapterIndex,
      userid,
      id,
      stringifyContents,
    });
    res.status(HttpStatus.CREATED).send(classes);
  }

  @Post('/chapter/:id')
  async createChapter(
    @Headers('Authorization') authHeader: string,
    @Param('id') id: number,
    @Body() { chapterName }: CreateChapterClassDto,
    @Res() res,
  ) {
    const { userid } = await this.usersService.getProfile(authHeader);

    const classes = await this.studyService.createClassChapter({
      userid,
      id,
      chapterName,
    });
    res.status(HttpStatus.CREATED).send(classes);
  }
}
