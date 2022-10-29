import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../app/home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServiceComponent } from './service/service.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
const routes: Routes = [
 {path:'',redirectTo:'home',pathMatch:'full'},
 {path:'home',component:HomeComponent},
 {path:'aboutus',component:AboutusComponent},
 {path:'service',component:ServiceComponent},
 {path:'login',component:LoginComponent},
 {path:'register',component:RegisterComponent},
 {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]},
 {path:'content',component:ContentComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class AppRoutingModule { }
