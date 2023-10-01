import { Component, EventEmitter, Output } from '@angular/core';
import { PersonDbz } from '../../interfaces/person.interface';

@Component({
  selector: 'add-dbz-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent {

  @Output()
  public onEmiterPerson: EventEmitter<PersonDbz> = new EventEmitter();

  public person: PersonDbz = {
    id:'',
    name: '',
    power: 0
  }

  emitPerson() {

    if (this.person.name.length === 0) return;
    console.log(this.person);

    this.onEmiterPerson.emit(this.person);

    this.person = { id:'',name: '', power: 0 }
    console.log(this.person);
  }
}
