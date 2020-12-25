import { Component, DoCheck, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit, DoCheck {

  // isLogged = false;
  isLogged$ = this.authService.isLogged$;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  ngDoCheck(): void{
    // this.isLogged = this.authService.isLogged;
  }
}
