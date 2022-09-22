import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllstudentregistrationComponent } from './allstudentregistration/allstudentregistration.component';
import { AuthguardGuard } from './authguard.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NotifyGuard } from './notify.guard';

import { StudentregistrationComponent } from './studentregistration/studentregistration.component';

const routes: Routes = [
  {path:'login',component: LoginComponent},
 
  {path:'dashboard', component: DashboardComponent, canActivate: [AuthguardGuard],
  children: [
{path:'studentregistration', component: StudentregistrationComponent},
{path: 'allstudentregistration', component: AllstudentregistrationComponent, canDeactivate:[NotifyGuard],},
{path: 'allstudentregistration-details',component: AllstudentregistrationComponent},

  
]
  },
{path:'',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
