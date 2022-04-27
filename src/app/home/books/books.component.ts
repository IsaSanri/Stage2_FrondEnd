
import { Component, OnInit, Input, Output,EventEmitter} from '@angular/core';
import{Book} from '../../models/books.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})

export class BooksComponent implements OnInit {

  @Input() book: Book= {
    abstract:'',
    article_type:'',
    author_display:'',
    eissn:0,
    id:'',
    journal:'',
    publication_date:'',
    score:0,
    title_display:'',
    journal_image:'',
    editMode: false,
    count:0
  }
  @Output() removeCard = new EventEmitter();
  @Output() editCard = new EventEmitter();

  abstractShow: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.book.journal_image = this.book.journal.toUpperCase().includes('PLOS ONE')
      ? 'assets/plos_one.png'
      : 'assets/not_found.png';
  }

  showAbstract(): void {
    this.abstractShow=!this.abstractShow;
  }

  deleteCard():void{
    this.removeCard.emit();
  }

  setEdit():void{
    this.book.editMode=true;
  }
}

