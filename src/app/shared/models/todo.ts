export class Todo {
  id: number;
  text: string = '';
  completed: boolean = false;
  isEditing: boolean = false;
  editedText: string = '';

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
