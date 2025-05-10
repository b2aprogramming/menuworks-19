import { Component } from '@angular/core';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss'],
  standalone: false
})
export class SubHeaderComponent {
  public menus = [
    {name: 'User Admin', url: '/'},
    {name: 'Smart Tags', url: '/mat-form'},
  ];
}
