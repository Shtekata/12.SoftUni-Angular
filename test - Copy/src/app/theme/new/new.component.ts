import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { INewTheme } from 'src/app/shared/interfaces/new-theme';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  isLoading = false;

  constructor(private themeService: ThemeService, private router: Router) { }

  ngOnInit(): void {
  }

  submitHandler(data: INewTheme): void {
    this.themeService.saveTheme(data).subscribe({
      next: () => this.router.navigate(['/theme']),
      error: (err) => { }
    });
  }

}
