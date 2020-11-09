import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-name-input-third',
  templateUrl: './name-input-third.component.html',
  styleUrls: ['./name-input-third.component.css']
})
export class NameInputThirdComponent implements OnInit {

  @Input() inputValue = 'Default Value';


  constructor() { }

  ngOnInit(): void {
  }

  btnClickHandler(value: KeyboardEvent, inputEl: HTMLInputElement): void {
    console.log('btn was clicked!', value);
    console.log('input value is', inputEl);
  }
}
