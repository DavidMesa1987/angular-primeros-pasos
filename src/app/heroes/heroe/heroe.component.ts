import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {
  public name:string = 'iron Man';
  public age:number = 27;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroeDescription():string{
    return `${this.name} - ${this.age}`
  }

  changeHeroe():void{
    this.name = 'Spiderman'
  }
  changeAge():void{
    this.age = 32;
  }

  reset():void{
    this.age = 27;
    this.name = 'iron Man'
  }
}
