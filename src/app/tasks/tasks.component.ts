import { Component, inject, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { newTask } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) UserId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask: boolean = false;

  private taskserve = inject(TasksService);

  get selectedUserTask() {
    return this.taskserve.getUserTasks(this.UserId);
  }
  onAddTaskStart() {
    this.isAddingTask = true;
  }
  onClickCancel() {
    this.isAddingTask = false;
  }
}
