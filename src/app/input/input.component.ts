import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  textInput: string = '';
  @Output() addTodoEmitter = new EventEmitter<string>();

  addTodo() {
    let text = this.textInput.trim();
    if(!text) {
      return;
    }
    this.addTodoEmitter.emit(text);
    this.textInput = '';
  }

}
