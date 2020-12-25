import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/core/auth.service';
import { IUser } from 'src/app/shared/interfaces';
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
  
  inEditMode = false;
  isLoading = false;

  constructor(private userService: UserService, private authService: AuthService) {}

  ngOnInit(): void {
    this.userService.getCurrentUserProfile().subscribe();
  }

  toggleEditMode(): void{
    this.inEditMode = !this.inEditMode;
  }

  submitHandler(data: any): void{
    this.isLoading = true;
    this.userService.updateProfile(data).subscribe(x => {
      this.isLoading = false;
      this.inEditMode = false;
    }, (err) => { this.isLoading = false; console.log(err.message); });
  }
}
