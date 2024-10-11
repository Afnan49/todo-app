import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { newTask } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  private tasksServe = inject(TasksService);
  @Input({ required: true }) userId!: string;
  @Output() cansel = new EventEmitter<void>();

  onClickCansel() {
    this.cansel.emit();
  }

  onSubmit() {
    this.tasksServe.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDate,
      },
      this.userId
    );
    this.cansel.emit();
  }
}
