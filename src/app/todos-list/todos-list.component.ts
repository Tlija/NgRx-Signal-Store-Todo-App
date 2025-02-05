import {Component, inject} from '@angular/core';
import {MatFormField, MatLabel, MatSuffix} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatIcon} from '@angular/material/icon';
import {MatButtonToggle, MatButtonToggleGroup} from '@angular/material/button-toggle';
import {MatListOption, MatSelectionList} from '@angular/material/list';
import {TodosStore} from '../store/todo.store';

@Component({
  selector: 'app-todos-list',
  imports: [
    MatFormField,
    MatInput,
    MatIcon,
    MatSuffix,
    MatLabel,
    MatButtonToggleGroup,
    MatButtonToggle,
    MatSelectionList,
    MatListOption
  ],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss'
})
export class TodosListComponent {
  store = inject(TodosStore)

  protected readonly stop = stop;

  async onAddTodo(value: string) {
    await this.store.addTodo(value)
  }

  async onDeleteTodo(id: string, event: MouseEvent) {

    event.stopPropagation()
    await this.store.deleteTodo(id);


  }

}
