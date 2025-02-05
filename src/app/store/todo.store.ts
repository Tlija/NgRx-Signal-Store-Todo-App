import {TodoModel} from '../model/todo.model';
import {patchState, signalStore, withMethods, withState} from '@ngrx/signals';
import {inject} from '@angular/core';
import {TodoService} from '../services/todo.service';

export type TodoFilter = "all" | "pending" | "completed";

type TodoState = {
  todos: TodoModel[];
  loading: boolean;
  filter: TodoFilter;
}
const initialState: TodoState = {
  todos: [],
  loading: false,
  filter: 'all'
}


export const TodosStore = signalStore(
  {providedIn: 'root'},
  withState(initialState),
  withMethods(
    (store, todosService = inject(TodoService)) => ({

      async loadAll() {
        patchState(store, {loading: true});
        const todos = await todosService.getTodos();
        patchState(store, {todos: todos, loading: false})
      },

      async addTodo(title: string) {
        const todo = await todosService.addTodo({title, completed: false})
        patchState(store, (state) => ({
          todos: [...state.todos, todo]
        }))
      },

      async deleteTodo(id: string) {
        await todosService.deleteTodo(id)

        patchState(store, (state) => ({
          todos: state.todos.filter(todo => todo.id !== id)
        }))
      }


    })
  )
)
