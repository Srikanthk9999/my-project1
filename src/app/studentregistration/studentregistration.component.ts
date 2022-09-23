import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AllstudentregistrationService } from '../allstudentregistration.service';

@Component({
  selector: 'app-studentregistration',
  templateUrl: './studentregistration.component.html',
  styleUrls: ['./studentregistration.component.css'],
})
export class StudentregistrationComponent implements OnInit {
  public studentregistrationForm: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(15),
    ]),
    id: new FormControl('', [
      Validators.required,
      Validators.min(0),
      Validators.max(99),
    ]),
    mobile: new FormControl('', [
      Validators.required,
      Validators.min(1000000000),
      Validators.max(9999999999),
    ]),
    gender: new FormControl('', [
      Validators.required,
      Validators.min(10),
      Validators.max(99),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(20),
    ]),
    batch: new FormControl('', [
      Validators.required,
      Validators.min(2000),
      Validators.maxLength(2999),
    ]),
    district: new FormControl('', [
      Validators.required,
      Validators.minLength(15),
      Validators.maxLength(20),
    ]),
    state: new FormControl('', [
      Validators.required,
      Validators.minLength(15),
      Validators.maxLength(20),
    ]),
  });
  public id: string = '';
  public isEdit: boolean = false;
  constructor(
    private _allstudentregistrationService: AllstudentregistrationService,
    private _activatedRoute: ActivatedRoute
  ) {
    this._activatedRoute.params.subscribe((data: any) => {
      if (data.id) {
        this.id = data.id;
        this.isEdit = true;
      } else {
        this.isEdit = false;
      }
      this._allstudentregistrationService
        .getAllStudentregistration()
        .subscribe((data2: any) => {
          this.studentregistrationForm.patchValue(data2);
        });
    });
  }

  ngOnInit(): void {}
  submit() {
    
    console.log(this.studentregistrationForm.value);

    if (this.isEdit) {
      this._allstudentregistrationService
        .updatedAllstidentregistration(
          this.id,
          this.studentregistrationForm.value
        )
        .subscribe(
          (data: any) => {
            alert('created successfully !!!');
          },
          (err: any) => {
            alert('internal server error');
          }
        );
    } else {
      this._allstudentregistrationService
        .createdStudentregistration(this.studentregistrationForm.value)
        .subscribe(
          (data: any) => {
            alert('created suuccessfully !!!');
          },
          (err: any) => {
            alert('internal server error');
          }
        );
    }
  }
}
