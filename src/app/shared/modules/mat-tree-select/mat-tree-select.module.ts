import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatTreeModule } from '@angular/material/tree';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTreeSelectComponent } from './mat-tree-select.component';
import { ExpandCollapseModule } from '../expand-collapse/expand-collapse.module';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from "../icon/icon.module";
import { MatInputModule } from '@angular/material/input';
import { ReusableTreeSelectComponent } from './reusable-tree-select.component';



@NgModule({
  declarations: [
    MatTreeSelectComponent,
    ReusableTreeSelectComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    ExpandCollapseModule,
    MatTreeModule,
    MatIconModule,
    MatInputModule,
    IconModule
],
  exports: [
    MatTreeSelectComponent,
    ReusableTreeSelectComponent
  ]
})
export class MatTreeSelectModule { }
