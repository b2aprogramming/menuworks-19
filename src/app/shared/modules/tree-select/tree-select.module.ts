import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTreeModule } from '@angular/material/tree';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { TreeSelectComponent } from './components/tree-select.component';
import { TreeSelectService } from './services/tree-select.service';
import { IconModule } from '../icon/icon.module';

@NgModule({
  declarations: [
    TreeSelectComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTreeModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    IconModule
  ],
  exports: [
    TreeSelectComponent
  ],
  providers: [
    TreeSelectService
  ]
})
export class TreeSelectModule { } 