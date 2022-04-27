import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Book } from '../models/books.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private apiUrl='https://api.plos.org/search?q=title:DNA';

  constructor(private http: HttpClient) { }

  getAllBooks() {
    return this.http.get<Book[]>(this.apiUrl);
  }

  removeCard(id:string){
    return this.http.delete<boolean>(`${this.apiUrl}/${id}`);
  }
}
