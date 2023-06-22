import { AfterContentChecked, ChangeDetectionStrategy, Component, Input, ViewRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Entity, Pair } from 'src/app/models/entity';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-b',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss'],
  // changeDetection:ChangeDetectionStrategy.OnPush
})
export class BComponent implements AfterContentChecked {
  @Input() referances?: Pair
  @Input() name?: string
  mainService = inject(MainService)
  counter = 0

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
