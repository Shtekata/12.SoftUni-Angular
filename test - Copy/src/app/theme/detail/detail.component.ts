import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost, ITheme } from 'src/app/shared/interfaces';
import { UserService } from 'src/app/user/user.service';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, DoCheck {

  isLogged = false;
  theme: ITheme<IPost, string> = null;

  constructor(private userService: UserService, themeService: ThemeService, activatedRoot: ActivatedRoute) {
    const id = activatedRoot.snapshot.params.id;
    themeService.loadTheme(id).subscribe(x => this.theme = x);
  }

  ngOnInit(): void {
  }

  ngDoCheck(): void{
    // this.isLogged = this.userService.isLogged;
  }

}
