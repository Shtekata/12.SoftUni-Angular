import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomeComponent } from './mome.component';

describe('MomeComponent', () => {
  let component: MomeComponent;
  let fixture: ComponentFixture<MomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
