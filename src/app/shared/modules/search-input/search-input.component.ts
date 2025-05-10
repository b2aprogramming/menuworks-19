import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  standalone: false
})
export class SearchInputComponent {
  @Input() placeholder: string = "Search";
  @Input() label: string = "Search";
  @Output() search: EventEmitter<String> = new EventEmitter();
  @Output() change: EventEmitter<String> = new EventEmitter();
  @Output() clear: EventEmitter<void> = new EventEmitter();

  public searchField = new FormControl<string>("");

  public onInput(){
    this.search.emit(this.searchField.value || '');
  }  

  public changeInput(){
    this.change.emit(this.searchField.value || '');
  }  

  public clearSearch(){
    this.searchField.setValue('');
    this.clear.emit();
  }  
}
