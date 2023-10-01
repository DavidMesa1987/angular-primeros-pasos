import { Component,Input,EventEmitter,Output} from '@angular/core';
import { PersonDbz } from '../../interfaces/person.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input('list') 
  public listPerson: PersonDbz[] = [
    {
      id: '',
      name: 'Trunks',
      power: 10
    }
  ]

  @Output()
  public indexPerson:EventEmitter<string> = new EventEmitter();



  onDeletePerson(id:string){
    console.log(id)

    this.indexPerson.emit(id);
  }

}
