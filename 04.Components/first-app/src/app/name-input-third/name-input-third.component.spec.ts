import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameInputThirdComponent } from './name-input-third.component';

describe('NameInputThirdComponent', () => {
  let component: NameInputThirdComponent;
  let fixture: ComponentFixture<NameInputThirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameInputThirdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NameInputThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
