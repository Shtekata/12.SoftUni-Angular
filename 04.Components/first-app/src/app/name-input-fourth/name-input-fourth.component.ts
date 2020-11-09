import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-name-input-fourth',
  templateUrl: './name-input-fourth.component.html',
  styleUrls: ['./name-input-fourth.component.css']
})
export class NameInputFourthComponent implements OnInit, OnChanges {

  @Input() inputValue = 'Default Value';
  // @Input() article: IArticle;
  @Output() btnClick = new EventEmitter();
  // @Output('btnClick') btnClickEmitter = new EventEmitter();


  constructor() {
    console.log();
   }

  ngOnInit(): void {
    console.log();
  }

  ngOnChanges(simpleChanges: SimpleChanges): void {
    console.log(simpleChanges);
  }

  btnClickHandler(value: KeyboardEvent, inputEl: HTMLInputElement): void {
    console.log('btn was clicked!', value);
    console.log('input value is', inputEl);

    this.btnClick.emit({ inputEl });
  }
}
