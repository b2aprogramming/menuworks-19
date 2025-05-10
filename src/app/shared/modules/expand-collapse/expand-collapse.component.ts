import { ChangeDetectorRef, Component, ComponentRef, ContentChild, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, TemplateRef, ViewContainerRef, ViewRef } from '@angular/core';
import { collapseAnimation } from './expand-collpase.animate';
import { ExpandCollapseTitleDirective } from './expand-collapse-title.directive';

@Component({
  selector: 'app-expand-collapse',
  templateUrl: './expand-collapse.component.html',
  styleUrls: ['./expand-collapse.component.scss'],
  standalone: false,
  animations: [
    collapseAnimation
  ]
})
export class ExpandCollapseComponent implements OnChanges, OnDestroy {
  @Input() public title = 'Title';
  @Input() public className = '';
  @Input() public headerClass = '';
  @Input() public isTitleBorder = false;
  @Input() public isDownUpArrow = true;
  @Input() public isCollapse = true;
  @Input() public iconClass: string = 'order-2';
  @Output() public expandCollapse: EventEmitter<boolean> = new EventEmitter();
  
  @ContentChild(ExpandCollapseTitleDirective, {read: TemplateRef}) public titleRef!: TemplateRef<ExpandCollapseTitleDirective>;

  constructor(private changeDetectorRef: ChangeDetectorRef){}
  
  @Input() public set isOpen( val: boolean) {
    this._isOpen = val;
  }
  public get isOpen(): boolean {
    return this._isOpen;
  }
  private _isOpen = false;

  ngOnChanges(): void {
      console.log('@@@ VAL', this.isOpen)
  }

  public onCollapse(): void {
    if(!this.isCollapse) {
      return;
    }
    this.isOpen = !this.isOpen;
    this.expandCollapse.emit(this.isOpen);
    this.changeDetectorRef.detectChanges();
  }
  ngOnDestroy(): void {
      this.isOpen = false;
  }

}
