import { Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import{Book} from '../../models/books.model'
import { BooksInformationService } from 'src/app/services/books-information.service';
import { BooksService } from 'src/app/services/books.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  books: Book[]=[];
  actualBooks:Book[]=[];

  bookChosen:Book={
    id: '',
    journal: '',
    abstract: '',
    title_display: '',
    editMode: false,
    count: 0,
    article_type: '',
    author_display: '',
    eissn: 0,
    publication_date: '',
    score: 0,
    journal_image: ''
  }

  tittleField=new FormControl('');
  journalField=new FormControl('');
  abstractField=new FormControl('');

  constructor(
    private bookInformationService: BooksInformationService,
    private bookService:BooksService)
  {
    this.actualBooks=this.bookInformationService.getMyBooks();
  }

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe((response:any)=>{
      this.books=response.response.docs;
      }
    );
  }

  onAddBook(book:Book){
    this.bookInformationService.addBook(book);
  }

  removeCard(): void{
    const id=this.bookChosen.id;
    this.bookService.removeCard(id)
    .subscribe(()=>{
    const bookIndex=this.books.findIndex(item=>item.id===this.bookChosen.id);
    this.books.splice(bookIndex,1);

    });

  }

  editCard(bookId:string):void{
    const bookFind = this.books.findIndex((data) => data.id === bookId);
    this.bookChosen = this.books[bookFind];
  }



}
