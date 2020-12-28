import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {

  username: string;

  constructor(private userservice: UserService) { }

  ngOnInit(): void {
  }

  onAddUser() {
    this.userservice.addUser(this.username, 'Active');
  }

}
