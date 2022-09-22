import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllstudentregistrationComponent } from './allstudentregistration.component';

describe('AllstudentregistrationComponent', () => {
  let component: AllstudentregistrationComponent;
  let fixture: ComponentFixture<AllstudentregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllstudentregistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllstudentregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
