import {Injectable} from '@angular/core';
import {mockTodos} from '../model/mock-data';
import {TodoModel} from '../model/todo.model';

@Injectable(
  {
    providedIn: "root"
  }
)

export class TodoService {


  async getTodos() {

    await sleep(1000)
    return mockTodos;
  }

  async addTodo(todo:Partial<TodoModel>){
    await  sleep(1000);
    return {
      id:Math.random().toString(36).substr(2,9),
      ...todo
    }as TodoModel

  }

}

async function sleep(ms: number) {

  return new Promise(resolve => setTimeout(resolve, ms))
}
