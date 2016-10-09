import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
  filters: string[] = ["all", "active", "completed"];
  @Input() currentFilter: string;
  @Output() changeFilter = new EventEmitter<string>();
  @Output() removeCompletedEmitter = new EventEmitter();

  setFilter(filter: string): void {
    this.changeFilter.emit(filter);
  }

  removeCompleted(): void {
    this.removeCompletedEmitter.emit();
  }

}
