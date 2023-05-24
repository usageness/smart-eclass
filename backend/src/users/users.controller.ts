import {
  Controller,
  Body,
  Post,
  Headers,
  Res,
  HttpStatus,
  Get,
} from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { UsersLoginDto } from './dto/login-user.dto';
// import { User } from './entities/user.entity';
import UsersService from './users.service';
// import AuthService from 'src/auth/auth.service';

@Controller()
export default class UserController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/signup')
  async createUser(@Body() dto: CreateUserDto, @Res() res): Promise<void> {
    const user = await this.usersService.createUser(dto);
    res.status(HttpStatus.CREATED).send(user);
  }

  @Post('/login')
  async login(@Body() dto: UsersLoginDto, @Res() res): Promise<void> {
    const { id, password } = dto;

    const user = await this.usersService.login(id, password);

    res.status(HttpStatus.OK).send(user);
  }

  @Get('/me')
  async getProfile(
    @Headers('Authorization') authHeader: string,
    @Res() res,
  ): Promise<void> {
    const user = await this.usersService.getProfile(authHeader);

    res.status(HttpStatus.OK).send(user);
  }
}
