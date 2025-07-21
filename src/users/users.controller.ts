// import { Controller } from '@nestjs/common';

// @Controller('users')
// export class UsersController {}
// src/users/users.controller.ts
import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  findAll() {
    return [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
    ];
  }
}
