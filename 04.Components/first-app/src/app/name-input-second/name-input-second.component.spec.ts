import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameInputSecondComponent } from './name-input-second.component';

describe('NameInputSecondComponent', () => {
  let component: NameInputSecondComponent;
  let fixture: ComponentFixture<NameInputSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameInputSecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NameInputSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
