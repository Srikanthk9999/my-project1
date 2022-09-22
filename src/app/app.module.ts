import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { StudentregistrationComponent } from './studentregistration/studentregistration.component';
import { AllstudentregistrationComponent } from './allstudentregistration/allstudentregistration.component';
import { AllstudentregistrationDetailsComponent } from './allstudentregistration-details/allstudentregistration-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    StudentregistrationComponent,
    AllstudentregistrationComponent,
    AllstudentregistrationDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
  

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
