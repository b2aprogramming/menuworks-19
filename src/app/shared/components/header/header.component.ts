import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpService } from '@core/http/http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false
})
export class HeaderComponent implements OnInit {
  public applicationScope = new FormControl<any>(null);
  public selectedRoles = new FormControl<any>(null);

  public menus = [
    { name: 'Home', link: '/', icon: 'home', exact: true },
    { name: 'Ingredients2', link: '/ingredients', icon: 'info', exact: false }
  ];

  public userRoles = [
    { name: 'Global Admin', id: 1 },
    { name: 'Ingredient Approver', id: 2 },
    { name: 'Ingredient Creator', id: 3 },
    { name: 'Ingredient Global Admin', id: 4 },
    { name: 'User', id: 5 }
  ];

  public countries = [
    { name: 'Global Admin', id: 1 },
    { name: 'Ingredient Approver', id: 2 },
    { name: 'Ingredient Creator', id: 3 },
    { name: 'Ingredient Global Admin', id: 4 },
    { name: 'User', id: 5 }
  ];

  constructor(private httpService: HttpService){
    this.selectedRoles.setValue(this.userRoles[0])
  }

  public ngOnInit(): void {
      this.getTreeData();
  }

  public getTreeData() {
    // this.httpService
  }

}
