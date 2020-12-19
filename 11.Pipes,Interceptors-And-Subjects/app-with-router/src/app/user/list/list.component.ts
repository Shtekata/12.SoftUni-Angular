import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  // userList = null;
  userList$ = this.userService.userList$;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // this.userService.loadUsers().subscribe(x => this.userList = x.body);
    // this.userService.loadUsers().subscribe(x => this.userList = x);
    // this.userService.loadUsers();
  }

}
