import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { StandardFilterData, TreeSelectService } from '../services/tree-select.service';

interface FlatTreeNode {
  expandable: boolean;
  name: string;
  level: number;
  id: number;
  checked: boolean;
  indeterminate: boolean;
  data: StandardFilterData;
}

@Component({
  selector: 'app-tree-select',
  templateUrl: './tree-select.component.html',
  styleUrls: ['./tree-select.component.scss'],
  standalone: false,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TreeSelectComponent),
      multi: true
    }
  ]
})
export class TreeSelectComponent implements OnInit, ControlValueAccessor {
  @Input() data: StandardFilterData[] = [];
  @Input() placeholder: string = 'Select items';
  @Input() multiple: boolean = false;

  public treeData: StandardFilterData[] = [];
  public selectedNodes: StandardFilterData[] = [];
  public disabled: boolean = false;

  private _transformer = (node: StandardFilterData, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
      id: node.id,
      checked: false,
      indeterminate: false,
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

  constructor(private treeSelectService: TreeSelectService) {}

  ngOnInit(): void {
    this.initializeTree();
  }

  private initializeTree(): void {
    this.treeData = this.treeSelectService.transformData(this.data);
    this.dataSource.data = this.treeData;
  }

  hasChild = (_: number, node: FlatTreeNode) => node.expandable;

  onNodeSelect(node: FlatTreeNode): void {
    if (this.disabled) return;

    if (this.multiple) {
      this.toggleNodeSelection(node);
    } else {
      this.selectSingleNode(node);
    }

    this.updateFormValue();
    this.onTouched();
  }

  private toggleNodeSelection(node: FlatTreeNode): void {
    node.checked = !node.checked;
    this.updateChildrenSelection(node);
    this.updateParentSelection(node);
    this.updateSelectedNodes();
  }

  private selectSingleNode(node: FlatTreeNode): void {
    this.selectedNodes = [node.data];
    this.updateFormValue();
  }

  private updateChildrenSelection(node: FlatTreeNode): void {
    const descendants = this.treeControl.getDescendants(node);
    descendants.forEach(descendant => {
      descendant.checked = node.checked;
      descendant.indeterminate = false;
    });
  }

  private updateParentSelection(node: FlatTreeNode): void {
    let parent = this.getParentNode(node);
    while (parent) {
      const children = this.treeControl.getDescendants(parent);
      const checkedCount = children.filter(child => child.checked).length;
      const indeterminateCount = children.filter(child => child.indeterminate).length;

      parent.checked = checkedCount === children.length;
      parent.indeterminate = checkedCount > 0 && checkedCount < children.length || indeterminateCount > 0;

      parent = this.getParentNode(parent);
    }
  }

  private getParentNode(node: FlatTreeNode): FlatTreeNode | null {
    const currentLevel = node.level;
    if (currentLevel < 1) return null;

    const startIndex = this.treeControl.dataNodes.indexOf(node) - 1;
    for (let i = startIndex; i >= 0; i--) {
      const currentNode = this.treeControl.dataNodes[i];
      if (currentNode.level < currentLevel) {
        return currentNode;
      }
    }
    return null;
  }

  private updateSelectedNodes(): void {
    this.selectedNodes = this.treeControl.dataNodes
      .filter(node => node.checked)
      .map(node => node.data);
  }

  private updateFormValue(): void {
    if (this.multiple) {
      this.onChange(this.selectedNodes.map(node => node.id));
    } else {
      this.onChange(this.selectedNodes[0]?.id || null);
    }
  }

  // ControlValueAccessor methods
  writeValue(value: any): void {
    if (value) {
      if (Array.isArray(value)) {
        this.selectedNodes = this.treeControl.dataNodes
          .filter(node => value.includes(node.id))
          .map(node => node.data);
      } else {
        const node = this.treeControl.dataNodes.find(n => n.id === value);
        if (node) {
          this.selectedNodes = [node.data];
        }
      }
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