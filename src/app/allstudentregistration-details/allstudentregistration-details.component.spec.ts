import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllstudentregistrationDetailsComponent } from './allstudentregistration-details.component';

describe('AllstudentregistrationDetailsComponent', () => {
  let component: AllstudentregistrationDetailsComponent;
  let fixture: ComponentFixture<AllstudentregistrationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllstudentregistrationDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllstudentregistrationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
