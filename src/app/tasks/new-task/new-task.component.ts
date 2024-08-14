import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { NewTask } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {
  @Input() userId!: string
  @Output() close = new EventEmitter<void>();

  enterdTitle = ""
  enterdSummary = ""
  enterdDate = ""
  private tasksService = inject(TasksService)

  onCancel() {
    this.close.emit()
  }

  OnSumbit() {

    this.tasksService.addTask({
      title: this.enterdTitle,
      summary: this.enterdSummary,
      date: this.enterdDate
    },
    this.userId
  );
  this.close.emit()
  }

  

}
  
