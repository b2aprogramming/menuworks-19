import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ingredients2SearchComponent } from './ingredients2-search.component';
import { RouterModule } from '@angular/router';
import { SearchInputModule } from '@shared/modules/search-input/search-input.module';
import { IconModule } from "@shared/modules/icon/icon.module";
import { ExpandCollapseModule } from "@shared/modules/expand-collapse/expand-collapse.module";
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { StandardComponent } from './standard/standard.component';
import { AdvancedComponent } from './advanced/advanced.component';
import { CardModule } from '@shared/modules/card/card.module';
import { MatTreeSelectInputModule } from '@shared/modules/mat-tree-select-input/mat-tree-select-input.module';
import { TreeSelectModule } from '@shared/modules/tree-select/tree-select.module';



@NgModule({
  declarations: [
    StandardComponent,
    AdvancedComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
        { path: '', component: Ingredients2SearchComponent }
    ]),
    SearchInputModule,
    IconModule,
    ExpandCollapseModule,
    ExpandCollapseModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatTabsModule,
    CardModule,
    MatTreeSelectInputModule,
    TreeSelectModule
],
exports: [
  StandardComponent,
    AdvancedComponent
]
})
export class Ingredients2SearchModule { }
