import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { DATA } from '../constants';
import { FormControl} from '@angular/forms';
import { HttpService } from '@core/http/http.service';
import { API } from '@core/http/http-api.constants';
import { FilterData } from '@shared/models/ingredients.model';


@Component({
  selector: 'app-advanced',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.scss'],
  standalone: false
})
export class AdvancedComponent implements OnInit {
   @ViewChild(MatPaginator) public paginator!: MatPaginator;
    public dataSource: MatTableDataSource<any> = new MatTableDataSource<any>(DATA);
    public listData!: Observable<any>;
    public sortField = new FormControl('byRrelevance');
    public filterData:FilterData[] = [];

    public standardList = [
        {name: 'Favorites', id: 1, data: [
          {name: 'My Favorites', selected: false, id: 1},
          {name: 'My Favorites2', selected: false, id: 2},
        ]},
        {name: 'Favorites 2', id: 1, data: [
          {name: 'My Favorites', selected: false, id: 1},
          {name: 'My Favorites2', selected: false, id: 2},
        ]},
        {name: 'Favorites3', id: 1, data: [
          {name: 'My Favorites', selected: false, id: 1},
          {name: 'My Favorites2', selected: false, id: 2},
        ]},
        {name: 'Favorites 4', id: 1, data: [
          {name: 'My Favorites', selected: false, id: 1},
          {name: 'My Favorites2', selected: false, id: 2},
        ]},
        {name: 'Favorites 5', id: 1, data: [
          {name: 'My Favorites', selected: false, id: 1},
          {name: 'My Favorites2', selected: false, id: 2},
        ]},
        {name: 'Favorites 6', id: 1, data: [
          {name: 'My Favorites', selected: false, id: 1},
          {name: 'My Favorites2', selected: false, id: 2},
        ]},
    ];
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
    public selectedFilters = [
      {name: 'Match all filters', id: 1, value: 'all'},
      {name: 'Match any filters', id: 2, value: 'any'}
    ];
    constructor(
      private changeDetectorRef: ChangeDetectorRef,
      private httpService: HttpService
    ) {
    }
  
    ngOnInit() {
      this.getFilterData();
      this.changeDetectorRef.detectChanges();
      this.dataSource.paginator = this.paginator;
      this.listData = this.dataSource.connect();
    }

    public getFilterData(){
        this.httpService.get( API.INGRADIENTS.FILTER_DATA).subscribe((res) => {
          console.log(res);
          this.filterData = res;
        })
      }
  
    ngOnDestroy() {
      if (this.dataSource) { 
        this.dataSource.disconnect(); 
      }
    }
    
}
