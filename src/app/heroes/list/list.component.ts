import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroes:string[] = ['Hulk','Spider Man','She Hulk','Iron Man','Tor'];
  
  public deleteName?:string ;

  deleteLastHero():void{
    this.deleteName = this.heroes.pop();
  
  }
}
