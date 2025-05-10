import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { API } from '@core/http/http-api.constants';
import { HttpService } from '@core/http/http.service';

export interface TreeNode {
  Name: string;
  children?: TreeNode[];
  [key: string]: any;
}

export interface FlatTreeNode {
  expandable: boolean;
  name: string;
  level: number;
  data: any;
}

@Component({
  selector: 'app-reusable-tree-select',
  templateUrl: './reusable-tree-select.component.html',
  styleUrls: ['./reusable-tree-select.component.scss'],
  standalone: false,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ReusableTreeSelectComponent),
      multi: true
    }
  ]
})
export class ReusableTreeSelectComponent implements OnInit, ControlValueAccessor {
  @Input() apiEndpoint: any = API.HEADER.TREE_MENU;
  @Input() placeholder: string = 'Select an option';
  @Input() displayField: string = 'Name';
  @Input() valueField: string = 'Id';

  public treeData: TreeNode[] = [];
  public selectedNode: any = null;
  public disabled: boolean = false;

  private _transformer = (node: TreeNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node[this.displayField],
      level: level,
      data: node
    };
  };

  treeControl = new FlatTreeControl<FlatTreeNode>(
    node => node.level,
    node => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  // ControlValueAccessor implementation
  private onChange: any = () => {};
  private onTouched: any = () => {};

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.getTreeData();
  }

  hasChild = (_: number, node: FlatTreeNode) => node.expandable;

  public getTreeData() {
    this.httpService.get(this.apiEndpoint).subscribe((res: any[]) => {
      const data = res.reduce((x, ele) => {
        if (x[ele.TypeId] === undefined) {
          x[ele.TypeId] = [ele];
        } else {
          x[ele.TypeId].push(ele);
        }
        return x;
      }, {});

      for (let key in data) {
        this.treeData.push({
          Name: 'Tree ' + key,
          children: data[key]
        });
      }

      this.dataSource.data = this.treeData;
    });
  }

  onNodeSelect(node: FlatTreeNode) {
    this.selectedNode = node.data;
    this.onChange(node.data[this.valueField]);
    this.onTouched();
  }

  // ControlValueAccessor methods
  writeValue(value: any): void {
    if (value) {
      this.selectedNode = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
} 