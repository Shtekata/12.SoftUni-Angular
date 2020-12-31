import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/core/auth.service';
import { emailValidator, rePasswordValidatorFactory } from 'src/app/shared/validators';
import { IUserModuleState } from '../+store';
import { userRegisterSetErrorMessage, userRegisterSetLoading } from '../+store/actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../../../assets/css/form-styles.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  // isLoading = false;
  isLoading$ = this.store.select(x => x.user.register.isLoading);
  errorMessage$ = this.store.select(x => x.user.register.errorMessage);

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private store: Store<IUserModuleState>
  ) {

    const passwordControl = this.fb.control('12345', [Validators.required, Validators.minLength(6)], []);

    this.form = this.fb.group({
      username: ['shtekata', [Validators.required, Validators.minLength(5)], []],
      email: ['gesheval@gmail.com', [Validators.required, emailValidator], []],
      tel: ['887658529', [], []],
      password: passwordControl,
      rePassword: ['12345', [Validators.required, Validators.minLength(6), rePasswordValidatorFactory(passwordControl)], []]
    });
  }

  ngOnInit(): void {
  }

  submitHandler(): void {
    // this.isLoading = true;
    this.store.dispatch(userRegisterSetLoading({ isLoading: true }));
    this.store.dispatch(userRegisterSetErrorMessage({ message: '' }));
    // setTimeout(() => { console.log(this.form.value); this.isLoading = false; }, 1500);
    const data = this.form.value;
    this.authService.register(data).subscribe(x => {
      // this.isLoading = false;
      this.store.dispatch(userRegisterSetLoading({ isLoading: false }));
      this.router.navigate(['/']);
    }, (err) => {
        // this.isLoading = false;
        this.store.dispatch(userRegisterSetLoading({ isLoading: false }));
        this.store.dispatch(userRegisterSetErrorMessage({ message: err.error.message }));
        console.log(err.message);
    });
    // this.authService.register(data).subscribe({
    //   next: x => {
    //     this.isLoading = false;
    //     this.router.navigate(['/user/login']);
    //   },
    //   error: (err) => {
    //     this.isLoading = false;
    //     console.log(err.message);
    //   }
    // });
  }
}
