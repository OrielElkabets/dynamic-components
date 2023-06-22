import { Component, ChangeDetectionStrategy, AfterContentChecked, Output, EventEmitter, inject, ViewContainerRef, ViewRef, Input, ViewChild, ComponentRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainService } from 'src/app/services/main.service';
import { Entity, Pair } from 'src/app/models/entity';

@Component({
  selector: 'app-a',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss'],
  // changeDetection:ChangeDetectionStrategy.OnPush
})
export class AComponent implements AfterContentChecked {
  @Input() referances?: Pair
  @Input() name?: string
  counter = 0
  mainService = inject(MainService)

  ngAfterContentChecked(): void {
    this.counter++
  }

  change() {
    return this.counter
  }

  remove() {
    if (this.referances)
      this.mainService.observer.next(this.referances)
  }
}
