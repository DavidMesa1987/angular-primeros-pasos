import { Component } from '@angular/core';


@Component({
    selector: 'app-counter',
    //templateUrl: './app.component.html',
    template: `
    <h3>Counter: {{counter}}</h3>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="decreaseBy(1)">-1</button>
    
    `
  })
  export class CounterComponet {

    public counter: number = 10;
  
    increaseBy(val:number): void {
      this.counter += val;
    }
  
    decreaseBy(val:number): void {
      this.counter -= val;
    }
  
    reset():void{
      this.counter = 10;
    }
  }