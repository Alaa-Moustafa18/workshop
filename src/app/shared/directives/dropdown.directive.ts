import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

 @HostBinding('class.show') isOpen:boolean =  false;

 constructor(private eleRef: ElementRef, private renderer: Renderer2){}

  @HostListener('click') toggleMenu(){
    this.isOpen = !this.isOpen;
    let showDiv = this.eleRef.nativeElement.querySelector(".dropdown-menu");
   this.isOpen ? this.renderer.addClass(showDiv, "show") : this.renderer.removeClass(showDiv,"show")
  }

}
