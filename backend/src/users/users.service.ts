import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export default class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async createUser({ userid, password, username }: CreateUserDto) {
    // 유효성 검사
    // userId: 2~19자, 영문자+숫자 조합
    if (!/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{2,19}$/.test(userid)) {
      throw new HttpException(
        '입력값을 다시 확인해주세요.',
        HttpStatus.BAD_REQUEST,
      );
    }
    // password: 8~19자, !@#$%^&*()+영문자+숫자
    if (
      !/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()])(?!.*\s).{8,19}$/.test(
        password,
      )
    ) {
      throw new HttpException(
        '입력값을 다시 확인해주세요.',
        HttpStatus.BAD_REQUEST,
      );
    }
    // username: 1~19자
    if (username.length < 1 || username.length > 19) {
      throw new HttpException(
        '입력값을 다시 확인해주세요.',
        HttpStatus.BAD_REQUEST,
      );
    }

    const userById = await this.usersRepository.findOne({ where: { userid } });
    const userByUsername = await this.usersRepository.findOne({
      where: { username },
    });

    // 이미 존재하는 아이디일 경우
    if (userById) {
      throw new HttpException(
        '이미 존재하는 아이디입니다. 다시 입력해주세요.',
        HttpStatus.BAD_REQUEST,
      );
    }

    // 이미 존재하는 닉네임일 경우
    if (userByUsername) {
      throw new HttpException(
        '이미 존재하는 닉네임입니다. 다시 입력해주세요.',
        HttpStatus.BAD_REQUEST,
      );
    }

    // 사용자 생성
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await this.usersRepository.create({
      userid,
      password: hashedPassword,
      username,
      privilege: '0',
    });
    await this.usersRepository.save(newUser);

    return newUser;
  }

  async login(userid: string, password: string) {
    // 1. 해당 id의 사용자를 DB에서 찾기
    const user = await this.usersRepository.findOne({ where: { userid } });

    // 1.1. 없으면 에러 반환
    if (!user) {
      throw new HttpException(
        '로그인에 실패하였습니다.',
        HttpStatus.BAD_REQUEST,
      );
    }

    // 2. password가 맞는지 확인
    const isPasswordMatching = await bcrypt.compare(password, user.password);

    // 2.1. 틀리면 에러 반환
    if (!isPasswordMatching) {
      throw new HttpException(
        '로그인에 실패하였습니다.',
        HttpStatus.BAD_REQUEST,
      );
    }

    // 3. 맞으면 JWT 발급
    const accessToken = await this.generateAccessToken(user);

    return {
      id: user.userid,
      username: user.username,
      accessToken,
    };
  }

  private async generateAccessToken(user: User): Promise<string> {
    return this.jwtService.sign(Object.assign({}, user));
  }

  async findById(userid: string) {
    const userById = await this.usersRepository.findOne({ where: { userid } });

    return userById;
  }

  async getProfile(token: string): Promise<User> {
    const payload = this.jwtService.verify(token);

    if (!payload) {
      throw new HttpException('인증에 실패하였습니다.', HttpStatus.BAD_REQUEST);
    }

    const userId = payload.userid;
    const user = await this.findById(userId);
    return user;
  }
}
