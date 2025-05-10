import {FlatTreeControl} from '@angular/cdk/tree';
import {Component, OnInit} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import { API } from '@core/http/http-api.constants';
import { HttpService } from '@core/http/http.service';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Fruit',
    children: [{name: 'Apple'}, {name: 'Banana'}, {name: 'Fruit loops'}],
  },
  {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [{name: 'Broccoli'}, {name: 'Brussels sprouts'}],
      },
      {
        name: 'Orange',
        children: [{name: 'Pumpkins'}, {name: 'Carrots'}],
      },
    ],
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}


@Component({
  selector: 'app-mat-tree-select',
  templateUrl: './mat-tree-select.component.html',
  styleUrls: ['./mat-tree-select.component.scss'],
  standalone: false
})
export class MatTreeSelectComponent implements OnInit {
  public treeData: any[] = []
  private _transformer = (node: any, level: number) => {
    console.log('@@@ DDD', level);
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.Name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(public httpService: HttpService) {
   // this.dataSource.data = TREE_DATA;
    console.log(this.dataSource);
  }

  ngOnInit(): void {
      this.getTreeData();
  }
  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  public getTreeData(){
    this.httpService.get(API.HEADER.TREE_MENU).subscribe((res: any[]) => {
        console.log('!!@@',res);

        const data = res.reduce((x, ele) => {
          if(x[ele.TypeId] === undefined) {
            x[ele.TypeId] = [ele];
          }else {
            x[ele.TypeId].push(ele);
          }
          return x;
        }, {});

        for(let key in data) {
          this.treeData.push({
            Name: ' Tree '+key,
            children: data[key]
          });
        }

        this.dataSource.data = this.treeData;

        console.log('!!22',this.treeData);
    })
  }
}
