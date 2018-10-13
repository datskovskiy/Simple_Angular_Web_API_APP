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
  filter:any = {};
  constructor(
    private bookstoreService: BookstoreService
  ) { }

  ngOnInit() {

    this.bookstoreService.getBookstores()
      .subscribe(bookstoresName => this.bookstoresName = bookstoresName);

    this.bookstoreService.getBookstores()
      .subscribe(bookstores => this.bookstores = this.allBooks =  bookstores);
  }

  onChange(){
    var books = this.allBooks;
     if(this.filter.id){
      books = books.filter(v => v.id == this.filter.id);
     }
      this.bookstores = books;
  }

  resetFilter(){
    this.filter = {};
    this.onChange();
  }
}