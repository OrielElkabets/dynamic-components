import { Injectable, ViewContainerRef, ViewRef } from '@angular/core';
import { Entity, KeyValue, Pair } from '../models/entity';
import { BComponent } from '../components/b/b.component';
import { AComponent } from '../components/a/a.component';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  readonly entities: Entity[]
  readonly observer = new Subject<Pair>()
  constructor() {
    this.entities = [
      new Entity(AComponent, [new KeyValue("name","A-1")], []),
      new Entity(BComponent, [new KeyValue("name","B-1")], []),
    ]
  }
}
