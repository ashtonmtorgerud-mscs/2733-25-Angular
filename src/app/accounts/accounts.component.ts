import { Component, Injectable, Input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { NgIf } from '@angular/common';
import { AccountsService } from '../shared/accounts.service';
import { FormsModule } from '@angular/forms';



const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-accounts',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css',
  providers: [ AccountsService ]
})

export class AccountsComponent {
  constructor(public  accountsService: AccountsService) {}


}
