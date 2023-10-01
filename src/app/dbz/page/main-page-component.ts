import { Component } from '@angular/core';
import { PersonDbz } from '../interfaces/person.interface';
import { DbzService } from '../service/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page-component.html',
})
export class DbzMainPageComponent {
    constructor(private dbzService: DbzService) {

    }

    get listPrson(): PersonDbz[] {
        return this.dbzService.list;
    }

    deletePersonById(id:string):void{
        this.dbzService.onDeletePersonById(id);
    }

    onListenPeron(person:PersonDbz):void{
        this.dbzService.onListenPerson(person);
    }
    
    

}
