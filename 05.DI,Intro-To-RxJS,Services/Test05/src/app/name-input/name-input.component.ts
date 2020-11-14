import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-name-input',
  templateUrl: './name-input.component.html',
  styleUrls: ['./name-input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NameInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
