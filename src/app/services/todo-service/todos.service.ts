import { Injectable } from '@angular/core';
import { Todo } from '../../shared/models/todo';

@Injectable()
export class TodosService {
  id: number = 0;
  todos: Todo[] = [];
  filter: string = "all";

  constructor() {
    this.fetchStorage();
  }

  private fetchStorage(): void {
    this.todos = JSON.parse(localStorage.getItem('todos') || '[]');
    this.todos.forEach((todo: Todo) => todo.id = this.generateId()); // generate ids on start
  }

  private generateId(): number {
    return this.id++;
  }

  get todosLeft(): number {
    return this.todos.filter(todo => !todo.completed).length;
  }

  get filteredTodos(): Todo[] {
    if(this.filter === "all") {
      return this.todos.filter(todo => true);
    }
    if(this.filter === "active") {
      return this.todos.filter(todo => !todo.completed);
    }
    return this.todos.filter(todo => todo.completed);
  }

  private updateLocalStorage(): void {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  addTodo(text: string): void {
    if(text && text.trim()) {
      let id: number = this.generateId();
      this.todos.unshift(new Todo({text, id}));
      this.updateLocalStorage(); // update local storage
    }
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.updateLocalStorage(); // update local storage
  }

  editTodo({keyCode,todo}): void {
    if(keyCode === 27) {
      todo.isEditing = false;
      todo.editedText = '';
      return;
    }
    if(keyCode === 13) {
      if(!todo.editedText.trim()) {
        return;
      }
      todo.text = todo.editedText;
      todo.editedText = '';
      todo.isEditing = false;
    }
    this.updateLocalStorage(); // update local storage
  }

  toggleTodo(todo: Todo): void {
    todo.completed = !todo.completed;
    this.updateLocalStorage(); // update local storage
  }

  filterBy(filter: string): void {
    this.filter = filter;
  }

  removeCompleted(): void {
    this.todos = this.todos.filter((todo: Todo) => !todo.completed);
    this.updateLocalStorage();
  }

}
