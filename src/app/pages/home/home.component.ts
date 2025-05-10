import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { API } from '@core/http/http-api.constants';
import { HttpService } from '@core/http/http.service';
import { HomeNotificationData, ProductTypesData } from '@shared/models/home.model';
import { CardModule } from '@shared/modules/card/card.module';
import { IconComponent } from '@shared/modules/icon/icon.component';
import { IconModule } from '@shared/modules/icon/icon.module';
import { SearchInputModule } from '@shared/modules/search-input/search-input.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    CommonModule,
    CardModule,
    SearchInputModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatRadioModule,
    IconModule
  ]
})
export class HomeComponent implements OnInit {
  public sortField = new FormControl('byRrelevance');
  public KeyField = new FormControl('');
  public searchKeys = [
    {name: 'Keyword', id: 1, value: 'keyword'},
    {name: 'Match Phrase Only', id: 2, value: 'matchPhrase'},
    {name: 'Recipe Number', id: 3, value: 'recipeNumber'},
  ];

  public sortMenus = [
    {name: 'Sort results by relevance', id: 1, value: 'byRrelevance'},
    {name: 'Sort alphabetically A-Z', id: 2, value: 'a-z'},
    {name: 'Sort alphabetically Z-A', id: 3, value: 'z-a'},
  ];

  public notificationData: HomeNotificationData[] = [];
  public recentRecipesData: ProductTypesData[] = [];

  constructor(public httpService: HttpService){
    
  }

  public ngOnInit(): void {
    this.getCardData();
    this.getNotifcation();
    this.getProductTypes();
  }

  public getCardData(){
    this.httpService.get(API.HOME.HOME_CARDS).subscribe((res) => {
      console.log(res);
    })
  }
  
  public getNotifcation(){
    this.httpService.get(API.HOME.HOME_NOTIFICATION).subscribe((res) => {
      console.log(res);
      this.notificationData = res;
    })
  }

  public getProductTypes(){
    this.httpService.get(API.HOME.HOME_PRODUCT_TYPES).subscribe((res) => {
      console.log(res);
      this.recentRecipesData = res;
    })
  }
  
}
