import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appPrinter]',
  standalone: true
})
export class PrinterDirective {
  constructor(public vcr:ViewContainerRef) { }
}
