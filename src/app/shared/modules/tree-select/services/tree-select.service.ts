import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface StandardFilterData {
    id: number;
    name: string;
    list?: number[];
    children?: StandardFilterData[];
}

@Injectable({
  providedIn: 'root'
})
export class TreeSelectService {
  private selectedNodesSubject = new BehaviorSubject<StandardFilterData[]>([]);
  selectedNodes$ = this.selectedNodesSubject.asObservable();

  constructor() { }

  transformData(data: StandardFilterData[]): StandardFilterData[] {
    // Since your data already has a tree structure with children,
    // we can return it directly or transform if needed
    return data;
  }

  updateSelectedNodes(nodes: StandardFilterData[]): void {
    this.selectedNodesSubject.next(nodes);
  }

  getSelectedNodes(): Observable<StandardFilterData[]> {
    return this.selectedNodes$;
  }
} 