import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Allstudentregistration } from '../allstudentregistration';
import { AllstudentregistrationService } from '../allstudentregistration.service';

@Component({
  selector: 'app-allstudentregistration-details',
  templateUrl: './allstudentregistration-details.component.html',
  styleUrls: ['./allstudentregistration-details.component.css']
})
export class AllstudentregistrationDetailsComponent implements OnInit {

  public allstudentregistration: Allstudentregistration = <Allstudentregistration>{};

  constructor(private _allstudentregistrationService: AllstudentregistrationService, private _activatedRoute: ActivatedRoute){

  this._activatedRoute.params.subscribe(
    (data:any)=>{
      this.getAllStudentregistration(data.id);
    }
  )
 
  }
  ngOnInit(): void {
  }
 getAllStudentregistration(id:string){
  this._allstudentregistrationService.getAllStudentregistration().subscribe(
    (data:any)=>{
      this.allstudentregistration=data;
    }
  )
 }

}
