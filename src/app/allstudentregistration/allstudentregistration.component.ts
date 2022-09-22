import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Allstudentregistration } from '../allstudentregistration';
import { AllstudentregistrationService } from '../allstudentregistration.service';

@Component({
  selector: 'app-allstudentregistration',
  templateUrl: './allstudentregistration.component.html',
  styleUrls: ['./allstudentregistration.component.css'],
})
export class AllstudentregistrationComponent implements OnInit {
  public allstudentregistration: Allstudentregistration[] = [];

  public filterTerm: string = '';

  public column: string = '';

  public order: string = '';

  constructor(
    private _allstudentregistrationservice: AllstudentregistrationService
  ) {
    this._allstudentregistrationservice.getAllStudentregistration().subscribe(
      (data: any) => {
        this.allstudentregistration = data;
      },
      (err: any) => {
        alert('internal server error');
      }
    );
  }

  ngOnInit(): void {}
  filter() {
    this._allstudentregistrationservice.getAllStudentregistration().subscribe(
      (data: any) => {
        this.allstudentregistration = data;
      },
      (err: any) => {
        alert('internal server error');
      }
    );
  }
  sort() {
    return this._allstudentregistrationservice
      .getAllStudentregistration()
      .subscribe(
        (data: any) => {
          this.allstudentregistration = data;
        },
        (err: any) => {
          alert('internal server error');
        }
      );
  }
  edit(id:string){
     
  }
  delete(id: string) {
    return this._allstudentregistrationservice
      .getAllStudentregistration()
      .subscribe(
        (data: any) => {
          alert('deleted successfully !!!!');
        },
        (err: any) => {
          alert('internal server error');
        }
      );
  }
}
