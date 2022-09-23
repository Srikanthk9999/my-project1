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
    private _allstudentregistrationservice: AllstudentregistrationService,
    private router: Router
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
    this._allstudentregistrationservice
      .getFilterAllstudentRegistration(this.filterTerm)
      .subscribe(
        (data: any) => {
          this.allstudentregistration = data;
          alert('seccc');
        },
        (err: any) => {
          alert('internal server error');
        }
      );
  }
  page(pageNo: number){
    this._allstudentregistrationservice.getpagedAllstudentRegistration(pageNo).subscribe(
      (data:any)=>{
        this.allstudentregistration=data;
      },
      (err:any)=>{
        alert('internal server error');
      }
    )
  }
  sort() {
    this._allstudentregistrationservice
      .getSortedAllstudentRegistration(this.column, this.order)
      .subscribe(
        (data: any) => {
          this.allstudentregistration = data;
        },
        (err: any) => {
          alert('internal server error');
        }
      );
  }

  delete(id: string) {
    return this._allstudentregistrationservice
      .DeleteAllstudentRegistration(id)
      .subscribe(
        (data: any) => {
          alert('deleted successfully !!!!');
         
        },
        (err: any) => {
          alert('internal server error');
        }
      );
  }
  edit(id: string) {
    this.router.navigateByUrl(
      '/dashboard/edit-allstudentregistration' + '/' + id
    );
  }

  view(id: string) {
    this.router.navigateByUrl(
      '/dashboard/allstudentregistration-details' + '/' + id
    );
  }
}
