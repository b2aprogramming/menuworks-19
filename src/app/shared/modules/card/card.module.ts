import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { CardHeaderComponent } from './card-header/card-header.component';
import { CardBodyComponent } from './card-body/card-body.component';



@NgModule({
  declarations: [
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent
  ]
})
export class CardModule { }
