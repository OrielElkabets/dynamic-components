import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PrinterDirective } from './components/printer.directive';
import { MainService } from './services/main.service';
import { Entity, KeyValue, Pair } from './models/entity';
import { AComponent } from './components/a/a.component';
import { BComponent } from './components/b/b.component';
import { ColorDirective } from './components/color.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PrinterDirective, ColorDirective],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'DynamicComponentsUI';
  @ViewChild(PrinterDirective, { static: true }) printer!: PrinterDirective;

  mainService = inject(MainService)
  entities = this.mainService.entities
  aCounter = 1
  bCounter = 1

  ngOnInit() {
    this.entities.forEach((entity, index) => {
      const cr = this.printer.vcr.createComponent<any>(entity.component)
      
      cr.setInput("referances", new Pair(entity, cr.hostView))
      entity.inputs.forEach(input => {
        cr.setInput(input.key, input.value)
      });
    })
    
    this.mainService.observer.subscribe(referances => {
      this.mainService.entities.slice(this.mainService.entities.indexOf(referances.entityRef),1)
      this.printer.vcr.remove(this.printer.vcr.indexOf(referances.viewRef))
    })
  }
  
  AddA(): void {
    const comp = new Entity(AComponent, [new KeyValue("name",`A-${++this.aCounter}`)], [])
    const cr = this.printer.vcr.createComponent<any>(comp.component)
    cr.setInput("referances", new Pair(comp, cr.hostView))
    
    comp.inputs.forEach(input => {
      cr.setInput(input.key, input.value)
    });
    this.entities.push(comp)
  }
  
  AddB(): void {
    const comp = new Entity(BComponent, [new KeyValue("name",`A-${++this.bCounter}`)], [])
    const cr = this.printer.vcr.createComponent<any>(comp.component)
    cr.setInput("referances", new Pair(comp, cr.hostView))
    comp.inputs.forEach(input => {
      cr.setInput(input.key, input.value)
    });
    this.entities.push(comp)
  }
}
