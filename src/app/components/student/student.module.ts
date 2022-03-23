import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { TopComponent } from './top/top.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';


const routes: Routes = [
  {path:'index',component:IndexComponent},
  {path:'create',component:CreateComponent},
  {path:'edit/:id',component:EditComponent},
  {path:'',component:IndexComponent}
];
@NgModule({
  declarations: [
    IndexComponent,
    CreateComponent,
    EditComponent,
    TopComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule
  ]
})
export class StudentModule { }
