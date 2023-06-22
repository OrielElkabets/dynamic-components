import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appColor]',
  standalone: true
})
export class ColorDirective implements OnChanges {
  @Input() color: string = "red"
  constructor(private el: ElementRef) {}
  
  ngOnChanges(){
    console.log(this.color);
    
    this.el.nativeElement.style.backgroundColor = this.color;
  }
}
