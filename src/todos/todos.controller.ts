// import { Controller } from '@nestjs/common';

// @Controller('todos')
// export class TodosController {}
import { Controller, Get, Post, Body, UseGuards, Req } from '@nestjs/common';
import { TodosService } from './todos.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('todos')
@UseGuards(JwtAuthGuard)
export class TodosController {
  constructor(private todosService: TodosService) {}

  @Post()
  create(@Body('text') text: string, @Req() req: any) {
    return this.todosService.create(text, req.user.userId);
  }

  @Get()
  findAll(@Req() req: any) {
    return this.todosService.findByUser(req.user.userId);
  }
}
