import { Component, Inject } from '@angular/core';
// import { API_URL_TOKEN, MyService, MY_SERVICE } from './providers';
import { API_URL_TOKEN, MyService } from './providers';
import { environment } from '../environments/environment';
import { UserService } from './user.service';
import { IUser } from './interfaces/user';
import { map, tap } from 'rxjs/operators';

const API_URL = environment.apiURL;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  title = 'Asen';

  data = {
    name: 'TEST'
  };

  users: IUser[] | null = null;

  // constructor(@Inject(API_URL_TOKEN) public apiURL: string) {
  // constructor(@Inject(MY_SERVICE) myService, @Inject(API_URL_TOKEN) public apiURL: string) {
  constructor(public userService: UserService, myService: MyService, @Inject(API_URL_TOKEN) public apiURL: string) {
    // this.http.get(this.apiURL + 'users');
    console.log(userService);
    setTimeout(() => {
      // this.data.name = 'Hello!';
      this.data = { name: 'Hello from new obj' };
      console.log(this.data.name);
      console.log(apiURL);
      console.log(API_URL_TOKEN);
    }, 3000);
    // userService.loadUsers().subscribe(x => this.users = x);
    userService.loadUsers().pipe(map(x => this.users = x), tap(console.log)).subscribe();
  }
}
