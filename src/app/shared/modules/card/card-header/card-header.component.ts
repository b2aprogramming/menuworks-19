import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-header',
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.scss'],
  standalone: false
})
export class CardHeaderComponent {
  @Input() padding: string = 'p-2';
  @Input() border: string = 'p-4';
  @Input() className: string = '';
}
