import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appShowMenu]'
})
export class ShowMenuDirective {

  constructor() { }
  @HostBinding('class.open') isShown: boolean = false

  @HostListener('click') toggleMenu(){
    this.isShown = !this.isShown
  }

}
