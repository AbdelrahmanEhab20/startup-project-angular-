import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DetailsComponent } from './components/details/details.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogoutComponent } from './components/logout/logout.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
 
  {path:'login',component:LoginComponent},
  
  {
    path: 'employee', 
    component:LayoutComponent,
    loadChildren: () => import('./components/employee/employee.module').then(m => m.EmployeeModule)
  },
  {
    path:'student',
    component:LayoutComponent,
    loadChildren: () => import('./components/student/student.module').then(m => m.StudentModule)

  },
  {path:'',component:LayoutComponent,children:[
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'contact',component:ContactComponent},
    {path:'tasks/details/:id',component:DetailsComponent},
    {path:'tasks',component:TasksComponent,canActivate:[AuthGuard]},
    {path:'logout',component:LogoutComponent},

  ]},
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
