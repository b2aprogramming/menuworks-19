import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation} from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { StandardComponent } from './standard/standard.component';
import { Ingredients2SearchModule } from './ingredients2-search.module';

@Component({
  selector: 'app-ingredients2-search',
  templateUrl: './ingredients2-search.component.html',
  styleUrls: ['./ingredients2-search.component.scss'],
  encapsulation: ViewEncapsulation.None,
 
  imports: [
    CommonModule,
    MatTabsModule,
    Ingredients2SearchModule
  ]
})
export class Ingredients2SearchComponent {
  
}
