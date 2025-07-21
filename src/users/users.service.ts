// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class UsersService {}
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users: any[] = [];

  async create(user: any) {
    const newUser = { id: Date.now(), ...user };
    this.users.push(newUser);
    return newUser;
  }

  async findByUsername(username: string) {
    return this.users.find((u) => u.username === username);
  }

  async findById(id: number) {
    return this.users.find((u) => u.id === id);
  }
}