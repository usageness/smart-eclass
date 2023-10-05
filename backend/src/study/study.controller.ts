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
import { UpdateClassDto } from './dto/update-class.dto';
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

  // @Post()
  // create(@Body() createStudyDto: CreateStudyDto) {
  //   return this.studyService.create(createStudyDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.studyService.remove(+id);
  // }
}
