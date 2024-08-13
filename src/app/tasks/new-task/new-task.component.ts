import { Component, EventEmitter, Output } from '@angular/core';
import { NewTask } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {

  @Output() cancel = new EventEmitter();
  @Output() add = new EventEmitter<NewTask>();

  enterdTitle = ""
  enterdSummary = ""
  enterdDate = ""

  onCancel() {
    this.cancel.emit()
  }

  OnSumbit() {

  }
}
