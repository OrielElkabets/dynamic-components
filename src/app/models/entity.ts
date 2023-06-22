import { ViewRef } from "@angular/core";

export class Entity {
    constructor(
        public component: any,
        public inputs: KeyValue[],
        public children: Entity[]) { }
}

export class KeyValue {
    constructor(public key: string, public value: any) { }
}

export class Pair {
    constructor(public entityRef: Entity, public viewRef: ViewRef) { }
}