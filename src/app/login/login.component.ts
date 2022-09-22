import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {

  public loginForm: FormGroup =new FormGroup({
    email:new FormControl(),
    password:new FormControl('', [
      Validators.required,
      Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\\S+$).{12,}$'),
    ]),
  });
 
  constructor(private _loginService: LoginService, private router: Router) {}

  ngOnInit(): void {}
 submit(){
  console.log(this.loginForm.value);

  this._loginService.login(this.loginForm.value).subscribe(
    (data:any)=>{
      alert('login success');
      this.router.navigateByUrl('/dashboard');
      sessionStorage.setItem('my-app-token',data.token);

    },
    (err:any)=>{
      alert('invalid credetintials');
    }
  );

 }
}
