import { Injectable } from "@angular/core";
import { DUMMY_USERS } from "../dummy-users";

@Injectable({
    providedIn: 'root'
})

export class UsersService{
    private userObj = DUMMY_USERS;
    selectedUser = "";
    selectedUserIndex = "";
  
    imagepath(i: string){
      // return 'app/assets/' + this.users[i].image;
    }
  
    clickOnuser(i: string){
      // this.selectedUser = this.users[i].image;
      this.selectedUserIndex = i;
    }
}