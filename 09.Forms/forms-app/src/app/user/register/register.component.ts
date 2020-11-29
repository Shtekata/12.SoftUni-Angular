import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['gesheval@gmail.com', [Validators.required, Validators.email], []],
      password: ['123', [Validators.required, Validators.minLength(3)]],
      address: this.fb.group({
        street: ['Manastirska', [Validators.required], []],
        postCode: ['1111', [Validators.required], []]
      })
    });
  }

  ngOnInit(): void {
  }

  registerHandler(): void {

  }
}
