import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  standalone: false
})
export class IconComponent {
  @Input() className: string = '';
  @Input() name: string = 'settings';
  @Input() size: string = '15px';
}
