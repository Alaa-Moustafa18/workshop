import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { News } from '../models/news';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

 url: string = '../../assets/newsapi.json'

  constructor(private http: HttpClient, private handleError: ErrorHandlerService) { }

  getNews(): Observable<News[]>{
   return  this.http.get<News[]>(this.url).pipe(catchError(this.handleError.logError))  
  }


}
