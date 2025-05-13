import { Injectable } from '@angular/core';
import { StandardFilterValuesData } from '@shared/models/ingredients.model';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TreeSelectService {
  private selectedNodesSubject = new BehaviorSubject<StandardFilterValuesData[]>([]);
  selectedNodes$ = this.selectedNodesSubject.asObservable();

  constructor() { }

  transformData(data: StandardFilterValuesData[]): StandardFilterValuesData[] {
    // Since your data already has a tree structure with children,
    // we can return it directly or transform if needed
    return data;
  }

  updateSelectedNodes(nodes: StandardFilterValuesData[]): void {
    this.selectedNodesSubject.next(nodes);
  }

  getSelectedNodes(): Observable<StandardFilterValuesData[]> {
    return this.selectedNodes$;
  }
} 