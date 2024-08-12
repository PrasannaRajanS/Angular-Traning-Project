import { Component } from '@angular/core';
import { DUMMY_USERS } from './user-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TraningProjec';
  users = DUMMY_USERS

  selectedId = "u1"


  get selectedUser(){
    return this.users.find((user)=>user.id === this.selectedId)
  }

  onSelectUser(id:string){
    console.log(id);
    this.selectedId = id
  }
}
