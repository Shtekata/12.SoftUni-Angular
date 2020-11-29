import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {

  // login = {
  //   email: '',
  //   password: ''
  // };

  @ViewChild('f', {static: false}) form!: NgForm;

  defaultPassword = 'pass';

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // setTimeout(() => {
    //   (this.form.controls as any).email.valueChanges.subscribe(console.log);
    // }, 0);
    this.form.valueChanges?.subscribe(console.log);
}

  loginHandler(x: User): void {
    // console.log(x);
    // this.login.email = x.email;
    console.log(`User email: ${this.form.form.value.email}`);
    console.log(`User pass: ${this.form.form.value.password}`);
  }

  reset(): void {
    this.form.reset();
  }

  setValue(): void{
    this.form.setValue({ email: 'gesheval@gmail.com', password: '123', address: { street: 'Manastirska', postCode: '1111' } });
  }
}
