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

  selectedID:string = ""

  get selectedUser(){
    return this.users.find((user)=>user.id === this.selectedID)
  }

  onSelectUser(id:string){
    console.log(id);
    this.selectedID = id
  }
}
