import { Injectable } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { NgModel } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class AccountsService {

  users = DUMMY_USERS;
  selectedUser = {id: '', name: '', image: ''};
  // selectedUser?: object;
  // selectedUser = '';
  selectedUserIndex = "";

  newUserID = '';
  newUserName = '';
  newUserIcon = '';

  editUserId = '';
  editUserName = '';
  editUserIcon = '';

  onSelectUser(i: number) {
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser = DUMMY_USERS[randomIndex];
    this.selectedUser = this.users[i];
    this.selectedUserIndex = String(i);
    this.editUserId = this.users[i].id;
    this.editUserName = this.users[i].name;
    this.editUserIcon = this.users[i].image;
  }

  printALine(message: string){
    console.log(message);
  }

  imagePath(i: string) {
    return './assets/' + i;
  }



  delUser(i: number) {
    this.users.splice(i,1);
    this.selectedUser = {id: '', name: '', image: ''}
    
    // let newUsers = [];
    // for (let j = 0; j < this.users.length; i++){
    //   if (j !== i){
    //     newUsers.push(this.users[j]);
    //   }
    // }
    // this.users = newUsers;
  }

  addUser() {
    this.selectedUserIndex = "";

    const newUser = {
        id: this.newUserID,
        name: this.newUserName,
        image: this.newUserIcon
    }

    this.users.push(newUser);

  }

  editEverything(){
    this.users[Number(this.selectedUserIndex)].id = this.editUserId;
    this.users[Number(this.selectedUserIndex)].name = this.editUserName;
    this.users[Number(this.selectedUserIndex)].image = this.editUserIcon;
  }


  editUserIdMethod(i: number, s: string) {
    this.users[Number(this.selectedUserIndex)].name = s;
  }

  editUserNameMethod(i: number, s: string) {
    this.users[Number(this.selectedUserIndex)].id = s;
  }

  editUserIconMethod(i: number, s: string) {
    this.users[Number(this.selectedUserIndex)].image = s;
  }


}