import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpandCollapseComponent } from './expand-collapse.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { ExpandCollapseTitleDirective } from './expand-collapse-title.directive';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    ExpandCollapseComponent,
    ExpandCollapseTitleDirective
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatIconModule
  ],
  exports: [
    ExpandCollapseComponent,
    ExpandCollapseTitleDirective
  ]
})
export class ExpandCollapseModule { }
