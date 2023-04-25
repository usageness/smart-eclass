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
  async createUser(@Body() dto: CreateUserDto): Promise<void> {
    await this.usersService.createUser(dto);
  }

  @Post('/login')
  async login(@Body() dto: UsersLoginDto, @Res() res): Promise<void> {
    const { id, password } = dto;

    const user = await this.usersService.login(id, password);

    res.status(HttpStatus.OK).send(user);
  }

  // @Get('/me')
  // @UseGuards(AuthGuard('jwt'))
  // async getProfile(
  //   @Headers('authorization') authHeader: string,
  // ): Promise<User> {
  //   return this.authService.validateToken(authHeader);
  // }
}
