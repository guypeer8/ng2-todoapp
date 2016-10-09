import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from '../shared/models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() todo: Todo = new Todo();
  @Output() toggleTodoEmitter = new EventEmitter<Todo>();
  @Output() deleteTodoEmitter = new EventEmitter<number>();
  @Output() editTodoEmitter = new EventEmitter();

  toggleTodo(todo: Todo): void {
    this.toggleTodoEmitter.emit(todo);
  }

  deleteTodo(id: number): void {
    this.deleteTodoEmitter.emit(id);
  }

  startEdit(todo: Todo): void {
    if(todo.completed) {
      return;
    }
    todo.isEditing = true;
    todo.editedText = todo.text;
  }

  edit(event, todo: Todo): void {
    const keyCode: number = event.keyCode;
    this.editTodoEmitter.emit({keyCode,todo});
  }

}
