import { HttpErrorResponse, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor() { }
  logError(error: HttpErrorResponse){
    error.error instanceof ErrorEvent ? console.log("client side error", error) : console.log("server side error", error)
    return throwError("Something went wrong");
  }
}
