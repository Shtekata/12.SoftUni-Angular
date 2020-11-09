import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-input-second',
  templateUrl: './name-input-second.component.html',
  styleUrls: ['./name-input-second.component.css']
})
export class NameInputSecondComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  btnClickHandler(value: KeyboardEvent, inputEl: HTMLInputElement): void {
    console.log('btn was clicked!', value);
    console.log('input value is', inputEl);
  }

}
