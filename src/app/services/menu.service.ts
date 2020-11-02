import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  // menuSubject = new BehaviorSubject(false)
  showMenu : boolean = false 
  constructor() { }
}
