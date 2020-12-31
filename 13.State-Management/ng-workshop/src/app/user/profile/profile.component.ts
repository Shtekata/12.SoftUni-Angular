import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { first } from 'rxjs/operators';
import { AuthService } from 'src/app/core/auth.service';
import { IUser } from 'src/app/shared/interfaces';
import { IUserModuleState } from '../+store';
import { userProfileSetEditMode, userProfileSetErrorMessage, userProfileSetLoading } from '../+store/actions';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // get currentUser(): IUser{
  //   return this.authService.currentUser;
  // }
  currentUser$ = this.authService.currentUser$;
  
  // isLoading = false;
  // inEditMode = false;
  isLoading$ = this.store.select(x => x.user.profile.isLoading);
  errorMessage$ = this.store.select(x => x.user.profile.errorMessage);
  inEditMode$ = this.store.select(x => x.user.profile.isEditMode);

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private store: Store<IUserModuleState>
  ) { }

  ngOnInit(): void {
    this.userService.getCurrentUserProfile().subscribe();
  }

  toggleEditMode(currentValue: boolean): void{
    // this.inEditMode = !this.inEditMode;

    // let inEditMode: boolean = false;
    // this.inEditMode$.subscribe(x => inEditMode = x);
    // inEditMode ?
    //   this.store.dispatch(userProfileSetEditMode({ isEdit: false })):
    //   this.store.dispatch(userProfileSetEditMode({ isEdit: true }));

    // this.inEditMode$.pipe(first()).subscribe(x => this.store.dispatch(userProfileSetEditMode({ isEdit: !x })));

    this.store.dispatch(userProfileSetEditMode({ isEdit: !currentValue }));
  }

  submitHandler(data: any): void{
    // this.isLoading = true;
    this.store.dispatch(userProfileSetLoading({ isLoading: true }));
    this.store.dispatch(userProfileSetErrorMessage({ message: '' }));
    this.userService.updateProfile(data).subscribe(x => {
      // this.isLoading = false;
      // this.store.dispatch(userProfileSetLoading({ isLoading: false }));
      // this.inEditMode = false;
      this.store.dispatch(userProfileSetEditMode({ isEdit: false }));
    }, (err) => {
        // this.isLoading = false;
        // this.store.dispatch(userProfileSetLoading({ isLoading: false }));
        this.store.dispatch(userProfileSetErrorMessage({ message: err.error.message }));
        console.log(err.message);
    });
  }
}
