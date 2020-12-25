import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { ErrorService } from 'src/app/shared/error.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../../assets/css/form-styles.css']
})
export class LoginComponent implements OnInit {

  isLoading = false;
  get errorMessage() {
    return this.errorService.errorInfoMessage;
  }

  constructor(private authService: AuthService, private router: Router, private errorService: ErrorService) { }

  ngOnInit(): void {
  }

  submitFormHandler(data: { email: string, password: string }): void {
    this.isLoading = true;
    this.authService.login(data).subscribe(x => {
      this.isLoading = false;
      this.router.navigate(['/']);
    }, (err) => {
        this.errorService.errorInfoMessage = err.error.message;
        this.errorService.clearMessage('info');
        this.isLoading = false;
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
