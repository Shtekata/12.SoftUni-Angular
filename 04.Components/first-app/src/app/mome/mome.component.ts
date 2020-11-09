import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-mome',
  templateUrl: './mome.component.html',
  styleUrls: ['./mome.component.css'],
  encapsulation:ViewEncapsulation.ShadowDom
})
export class MomeComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void{
    console.log('mome component was destroyed!');
  }

}
