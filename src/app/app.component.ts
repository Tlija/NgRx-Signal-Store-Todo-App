import {Component, inject, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {JsonPipe, NgOptimizedImage} from '@angular/common';
import {TodosStore} from './store/todo.store';
import {TodosListComponent} from './todos-list/todos-list.component';
import {MatProgressSpinner} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-root',
  imports: [
    NgOptimizedImage,
    TodosListComponent,
    MatProgressSpinner
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  store = inject(TodosStore)

  ngOnInit() {

    this.loadeTodos().then(
      ()=>console.log('Todos Loaded !')
    )
  }

  async loadeTodos() {
    await this.store.loadAll();
  }

}
