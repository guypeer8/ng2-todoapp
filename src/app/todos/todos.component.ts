import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Todo } from '../shared/models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  @Input() todos: Todo[] = [];
  @Output() toggleTodoEmitter = new EventEmitter<Todo>();
  @Output() deleteTodoEmitter = new EventEmitter<number>();
  @Output() editTodoEmitter = new EventEmitter();

  toggleTodo(todo: Todo): void {
    this.toggleTodoEmitter.emit(todo);
  }

  deleteTodo(id: number): void {
    this.deleteTodoEmitter.emit(id);
  }

  editTodo({keyCode,todo}): void {
    this.editTodoEmitter.emit({keyCode,todo});
  }

}
