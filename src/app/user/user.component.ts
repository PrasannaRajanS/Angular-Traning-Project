import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from './user.model';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  // @Input({required:true}) id!: string
  // @Input({required:true}) avatar!: string
  // @Input({required:true}) name!: string
  @Input() user!:User
@Output() select = new EventEmitter();
@Input() selected!:boolean;

  get imagePath(){
    return 'assets/users/' + this.user.avatar
  }

  onSelectUser(){
    this.select.emit(this.user.id);
  }
}
