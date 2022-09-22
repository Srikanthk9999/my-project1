import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Allstudentregistration } from '../allstudentregistration';

@Component({
  selector: 'app-allstudentregistration-details',
  templateUrl: './allstudentregistration-details.component.html',
  styleUrls: ['./allstudentregistration-details.component.css']
})
export class AllstudentregistrationDetailsComponent implements OnInit {

  public allstudentregistration: Allstudentregistration = <Allstudentregistration>{};

  constructor(){

  
 
  }
  ngOnInit(): void {
  }
 

}
