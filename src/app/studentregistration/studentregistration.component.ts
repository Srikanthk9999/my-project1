import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AllstudentregistrationService } from '../allstudentregistration.service';

@Component({
  selector: 'app-studentregistration',
  templateUrl: './studentregistration.component.html',
  styleUrls: ['./studentregistration.component.css']
})
export class StudentregistrationComponent implements OnInit {

 public studentregistrationForm: FormGroup =new FormGroup(
  {
    name: new FormControl(),
    mobile: new FormControl(),
    gender: new FormControl(),
    email: new FormControl(),
    batch: new FormControl(),
    district: new FormControl(),
    state: new FormControl()



  }
 )
 public id: string = "";
  
  constructor(private _allstudentregistrationService: AllstudentregistrationService) { }

 
  ngOnInit(): void {
  }
  submit(){
    console.log(this.studentregistrationForm.value);
    
  }

}
