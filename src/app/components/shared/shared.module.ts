import { XyzModule } from './../xyz/xyz.module';
import { AbcModule } from './../abc/abc.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,AbcModule,XyzModule
  ],
  exports:[AbcModule]
})
export class SharedModule { }
