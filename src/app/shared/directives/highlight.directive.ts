import { Directive, ElementRef, Host, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(
    private elem : ElementRef
  ) { }
  
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('red')
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.highlight(null)
  }

  highlight(color : string){
    this.elem.nativeElement.style.backgroundColor = color
  }

}
