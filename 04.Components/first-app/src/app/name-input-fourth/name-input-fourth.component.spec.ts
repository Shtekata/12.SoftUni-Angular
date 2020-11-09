import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameInputFourthComponent } from './name-input-fourth.component';

describe('NameInputFourthComponent', () => {
  let component: NameInputFourthComponent;
  let fixture: ComponentFixture<NameInputFourthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameInputFourthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NameInputFourthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
