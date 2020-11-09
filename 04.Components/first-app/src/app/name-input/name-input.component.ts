import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-input',
  templateUrl: './name-input.component.html',
  styleUrls: ['./name-input.component.css']
})
export class NameInputComponent implements OnInit {

  inputValue = 'Dummy value';

  constructor() { }

  ngOnInit(): void {
  }

  // inputKeyupHandler(event: KeyboardEvent): void {
  //   // console.log(event);
  //   this.inputValue = (event.target as HTMLInputElement).value;
  // }
  
  inputKeyupHandler(target: HTMLInputElement): void {
    this.inputValue = target.value;
}

  btnClickHandler(value): void {
    // console.log(`btn was clicked ${value}!`);
    console.log(`btn was clicked!`, value);
  }

}
