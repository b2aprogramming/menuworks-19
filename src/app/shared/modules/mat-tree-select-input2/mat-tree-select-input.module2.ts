import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTreeSelectInputComponent2 } from './mat-tree-select-input.component2';
import { MatTreeSelectInputControlService2 } from './mat-tree-select-input-control.service2';
import { MatTreeModule } from '@angular/material/tree';
import { IconModule } from '../icon/icon.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [
    MatTreeSelectInputComponent2
  ],
  imports: [
    CommonModule,
    MatTreeModule,
    MatCheckboxModule,
    MatFormFieldModule,
    IconModule
  ],
  exports: [
    MatTreeSelectInputComponent2
  ],
  providers: [
    MatTreeSelectInputControlService2
  ]
})
export class MatTreeSelectInputModule2 { }
