import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/core/auth.service';
import { ErrorService } from 'src/app/shared/error.service';
import { IUserModuleState } from '../+store';
import { userLoginSetErrorMessage, userLoginSetLoading } from '../+store/actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../../assets/css/form-styles.css']
})
export class LoginComponent implements OnInit {

  // get errorMessage() {
    //   return this.errorService.errorInfoMessage;
    // }
  // errorMessage = '';
  // isLoading = false;
  isLoading$ = this.store.select(state => state.user.login.isLoading);
  errorMessage$ = this.store.select(state => state.user.login.errorMessage);

  constructor(
    private authService: AuthService,
    private router: Router,
    private errorService: ErrorService,
    private store: Store<IUserModuleState>
  ) { }

  ngOnInit(): void {
  }

  changeHandler(data: any): void{
    console.log(data);
  }

  submitFormHandler(data: { email: string, password: string }): void {
    // this.isLoading = true;
    // this.errorMessage = '';
    this.store.dispatch(userLoginSetLoading({ isLoading: true }));
    this.store.dispatch(userLoginSetErrorMessage({ message: '' }));
    this.authService.login(data).subscribe(x => {
      // this.isLoading = false;
      this.store.dispatch(userLoginSetLoading({ isLoading: false }));
      this.router.navigate(['/']);
    }, (err) => {
        // this.errorService.errorInfoMessage = err.error.message;
        // this.errorService.clearMessage('info');
        // this.isLoading = false;
        // this.errorMessage = err.error.message;
        this.store.dispatch(userLoginSetLoading({ isLoading: false }));
        this.store.dispatch(userLoginSetErrorMessage({ message: err.error.message }));
    });
    // this.authService.login(formValue).subscribe({
    //   next: x => {
    //     this.isLoading = false;
    //     this.router.navigate(['/']);
    //   },
    //   error: (err) => {
    //     this.errorMessage = 'ERROR!';
    //     this.isLoading = false;
    //   }
    // });
  }
}
