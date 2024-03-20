import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchText: string = '';
@Output()
  searchTextChanged: EventEmitter<string>= new EventEmitter<string>()

  onSearchTextChanged(){
    this.searchTextChanged.emit(this.searchText)
  }
  updateSearchText(inputEl: HTMLInputElement){
   this.searchText= inputEl.value;
   this.searchTextChanged.emit(this.searchText);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
