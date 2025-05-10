import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { DATA } from '../constants';
import { FormControl, FormGroup, FormBuilder} from '@angular/forms';
import { HttpService } from '@core/http/http.service';
import { API } from '@core/http/http-api.constants';
import { StandardFilterData } from '@shared/modules/tree-select/services/tree-select.service';


@Component({
  selector: 'app-standard',
  templateUrl: './standard.component.html',
  styleUrls: ['./standard.component.scss'],
  standalone: false,
})
export class StandardComponent implements OnInit {
  @ViewChild(MatPaginator) public paginator!: MatPaginator;
  public dataSource!: MatTableDataSource<any>;
  public listData!: Observable<any>;

  sampleData: StandardFilterData[] = [
    {
      id: 1,
      name: 'Category 1',
      list: [1, 2, 3],
      children: [
        {
          id: 2,
          name: 'Subcategory 1.1',
          list: [4, 5, 6],
          children: [
            {
              id: 3,
              name: 'Item 1.1.1',
              list: [7, 8, 9]
            }
          ]
        },
        {
          id: 3,
          name: 'Subcategory 1.1',
          list: [4, 5, 6],
        },
        {
          id: 4,
          name: 'Subcategory 1.1',
          list: [4, 5, 6],
        }
      ]
    },
    {
      id: 4,
      name: 'Category 2',
      list: [10, 11, 12],
      children: [
        {
          id: 5,
          name: 'Subcategory 2.1',
          list: [13, 14, 15]
        }
      ]
    }
  ];

  public sortField = new FormControl('byRrelevance');

  public standardList:any[] = [];
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

  public treeForm!: FormGroup;
  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private httpService: HttpService,
    private fb: FormBuilder,
  ) {
    this.treeForm = this.fb.group({
      singleSelect: [null],
      multipleSelect: [null],
    })
  }

  public ngOnInit() {
    this.getStandardIngredient();
    this.getGlobalResultData();
   
    
  }

  public getStandardIngredient(){
    this.httpService.get( API.INGRADIENTS.STANDARD_FILTER_DATA).subscribe((res) => {
      this.standardList = res;
    })
  }

  public getGlobalResultData(){
    this.httpService.get(API.INGRADIENTS.GLOBAL_RESULT).subscribe((res) => {
      console.log('@@ glT',res);
      // this.standardList = res;
      this.dataSource =  new MatTableDataSource<any>(res);
      this.changeDetectorRef.detectChanges();
      this.dataSource.paginator = this.paginator;
      this.listData = this.dataSource.connect();
  
     
    })
  }

  public ngOnDestroy() {
    if (this.dataSource) { 
      this.dataSource.disconnect(); 
    }
  }
  
}
