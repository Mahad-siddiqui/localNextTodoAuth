// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class AuthService {}
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwt: JwtService) {}

  async register(dto: RegisterDto) {
    const password = await bcrypt.hash(dto.password, 10);
    const user = await this.usersService.create({ ...dto, password });
    return this.generateToken(user);
  }

  async login(dto: LoginDto) {
    const user = await this.usersService.findByUsername(dto.username);
    const match = user && (await bcrypt.compare(dto.password, user.password));
    if (!match) throw new UnauthorizedException('Invalid credentials');
    return this.generateToken(user);
  }

  generateToken(user: any) {
    return {
      access_token: this.jwt.sign({ sub: user.id, username: user.username }),
    };
  }
}