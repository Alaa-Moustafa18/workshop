import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Category } from '../models/category';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {


  url: string = '../../assets/newsapi.json'

  constructor(private http: HttpClient, private handleError: ErrorHandlerService) { }

  getcategoris(): Observable<Category[]>{
   return  this.http.get<Category[]>(this.url).pipe(catchError(this.handleError.logError))  
  }
}
