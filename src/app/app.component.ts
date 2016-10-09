import { Component } from '@angular/core';
import { TodosService } from './services/todo-service/todos.service';
import { Todo } from './shared/models/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodosService]
})
export class AppComponent {

  constructor(private todosService: TodosService) {}

  onAddTodo(text: string): void {
    this.todosService.addTodo(text);
  }

  onDeleteTodo(id: number): void {
    this.todosService.deleteTodo(id);
  }

  onEditTodo({keyCode,todo}): void {
    this.todosService.editTodo({keyCode,todo});
  }

  onToggleTodo(todo: Todo): void {
    this.todosService.toggleTodo(todo);
  }

  onFilterChange(filter: string): void {
    this.todosService.filterBy(filter);
  }

  onRemoveCompleted(): void {
    this.todosService.removeCompleted();
  }

}
