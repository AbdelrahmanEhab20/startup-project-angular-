import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { IndexComponent } from './index/index.component';
import { EditComponent } from './edit/edit.component';
import { RouterModule, Routes } from '@angular/router';
import { AbcModule } from '../abc/abc.module';
import { XyzModule } from '../xyz/xyz.module';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {path:'index',component:IndexComponent},
  {path:'create',component:CreateComponent},
  {path:'edit/:id',component:EditComponent},
  {path:'',component:IndexComponent}
];

@NgModule({
  declarations: [
    CreateComponent,
    IndexComponent,
    EditComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule
  ]
})
export class EmployeeModule { }
