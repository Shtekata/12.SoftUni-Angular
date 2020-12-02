import { Component, DoCheck, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit, DoCheck {

  isLogged = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  ngDoCheck(): void{
    this.isLogged = this.userService.isLogged;
  }
}
