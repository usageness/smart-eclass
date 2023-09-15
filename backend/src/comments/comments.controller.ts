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
import { CommentsService } from './comments.service';
import { CreateCommentsDto } from './dto/create-comments.dto';
// import { UpdateCommentsDto } from './dto/update-comments.dto';
import UsersService from '../users/users.service';

@Controller('comments')
export class CommentsController {
  constructor(
    private readonly commentsService: CommentsService,
    private readonly usersService: UsersService,
  ) {}

  @Post()
  async createComments(
    @Headers('Authorization') authHeader: string,
    @Body() createCommentsDto: CreateCommentsDto,
    @Res() res,
  ): Promise<void> {
    const { userid, username } = await this.usersService.getProfile(authHeader);
    createCommentsDto.userid = userid;
    createCommentsDto.username = username;
    const comments = await this.commentsService.create(createCommentsDto);
    res.status(HttpStatus.CREATED).send(comments);
  }

  // @Get('/all')
  // async findAll(@Res() res) {
  //   const study = await this.studyService.findAll();
  //   res.status(HttpStatus.OK).send(study);
  // }

  // @Get()
  // async findMyAll(@Headers('Authorization') authHeader: string, @Res() res) {
  //   const { userid } = await this.usersService.getProfile(authHeader);

  //   const study = await this.studyService.findMyAll({ userid });
  //   res.status(HttpStatus.OK).send(study);
  // }

  // @Get(':id')
  // async findOne(@Param('id') id: string, @Res() res) {
  //   const study = await this.studyService.findOne(+id);
  //   res.status(HttpStatus.OK).send(study);
  // }

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
