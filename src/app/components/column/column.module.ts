import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnComponent } from './column.component';
import { MaterialModule } from '../../shared/material/material.module';



@NgModule({
  declarations: [ColumnComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [ColumnComponent]
})
export class ColumnModule { }
