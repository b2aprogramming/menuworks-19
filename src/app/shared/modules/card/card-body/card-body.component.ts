import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-body',
  templateUrl: './card-body.component.html',
  styleUrls: ['./card-body.component.scss'],
  standalone: false
})
export class CardBodyComponent {
  @Input() padding: string = 'p-2';
  @Input() border: string = 'p-4';
  @Input() class: string = '';
}
