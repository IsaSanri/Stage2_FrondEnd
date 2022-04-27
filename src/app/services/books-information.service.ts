import { Injectable } from '@angular/core';
import { Book } from '../models/books.model';

@Injectable({
  providedIn: 'root'
})
export class BooksInformationService {

  private books: Book[]=[];

  constructor() { }

  addBook(book:Book){
    this.books.push(book);
  }
  
  getMyBooks(){
    return this.books;
  }
}
