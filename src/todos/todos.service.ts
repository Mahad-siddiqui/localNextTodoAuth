// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class TodosService {}
import { Injectable } from '@nestjs/common';

@Injectable()
export class TodosService {
  private todos: any[] = [];

  create(text: string, userId: number) {
    const todo = { id: Date.now(), text, userId };
    this.todos.push(todo);
    return todo;
  }

  findByUser(userId: number) {
    return this.todos.filter((t) => t.userId === userId);
  }
}
