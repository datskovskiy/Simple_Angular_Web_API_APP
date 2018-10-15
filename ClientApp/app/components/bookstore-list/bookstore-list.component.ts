import { BookstoreService } from './../../services/bookstore.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookstore-list',
  templateUrl: './bookstore-list.component.html',
  styleUrls: ['./bookstore-list.component.css']
})
export class BookstoreListComponent implements OnInit {

  bookstores: any[] = [];
  bookstoresName: any[] = [];
  allBooks: any[] = [];
  filter: any = {};
  constructor(
    private bookstoreService: BookstoreService
  ) { }

  ngOnInit() {
    this.bookstoreService.getBookstores(this.filter)
      .subscribe(bookstoresName => this.bookstoresName = bookstoresName);
    this.populateBooks();
  }

  private populateBooks() {
    this.bookstoreService.getBookstores(this.filter)
      .subscribe(bookstores => this.bookstores = bookstores);
  }

  onChange() {
    this.populateBooks();
  }

  resetFilter() {
    this.filter = {};
    this.onChange();
  }

  sortBy(columnName: any) {
    if (this.filter.sortBy === columnName) {
      this.filter.isSortAscending = !this.filter.isSortAscending;
    } else {
      this.filter.sortBy = columnName;
      this.filter.isSortAscending = true;
    }
    this.onChange();
  }
}