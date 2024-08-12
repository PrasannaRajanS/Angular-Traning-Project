import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  // @Input({required:true}) id!: string
  // @Input({required:true}) avatar!: string
  // @Input({required:true}) name!: string
  @Input() user!: {id: string;avatar: string;name: string}
  @Output() select =new EventEmitter();

  get imagePath(){
    return 'assets/users/' + this.user.avatar
  }

  onSelectUser(){
    this.select.emit(this.user.id);
  }
}
