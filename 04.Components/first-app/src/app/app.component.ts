import { Component } from '@angular/core';

const users = [
  {
    firstName: 'First Name 1',
    lastName: 'Last Name 1',
    age: 31
  },
  {
    firstName: 'First Name 2',
    lastName: 'Last Name 2',
    age: 32
  },
  {
    firstName: 'First Name 3',
    lastName: 'Last Name 3',
    age: 33
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // template: `<h1>{{mitle}}</h1>`,
  // styles:[`h1{background-color:red;}`]
})
export class AppComponent {
  mitle = 'App Mitle';

  isVisible = true;

  users = users;

  mySRC = '../assets/images/ballon.png';

  nameInputValue = 'TEST TEST';

  nameInputBtnClickHandler(data: { inputEl: HTMLInputElement }): void {
    console.log(data.inputEl.value);
  }

  constructor() {
    setTimeout(() => {
      this.nameInputValue = 'BEST';
    }, 4000);
  }

  toggleHandler(): void {
    this.isVisible = !this.isVisible;
}

}
