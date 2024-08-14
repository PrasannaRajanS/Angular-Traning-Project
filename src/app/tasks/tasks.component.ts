import { Component, Input } from '@angular/core';
import { NewTask } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  @Input() userId!: string;
  @Input() name!: string;
  isAddingTask = false;

 constructor(private taskService: TasksService){

 }

  get selectedUserTask() {
    return this.taskService.getUserTasks(this.userId)
  }

  addingTask(){
    this.isAddingTask = true
  }
  onCloseAddTask(){
    this.isAddingTask = false
  }

}
