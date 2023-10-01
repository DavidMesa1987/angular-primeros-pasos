import { Injectable } from '@angular/core';
import { PersonDbz } from '../interfaces/person.interface';
import { v4 as uuid } from "uuid";

@Injectable({
    providedIn: 'root'
})
export class DbzService {

    public list: PersonDbz[] = [
        {
            id:uuid(),
            name:'Krillin',
            power:1000
        },
        {
            id:uuid(),
            name:'Goku',
            power:9500
        },
        {
            id:uuid(),
            name:'Vegueta',
            power: 7000
        }
    ];

    onListenPerson(person:PersonDbz):void{

        const pers:PersonDbz = {...person}
        pers.id = uuid();
        this.list.push(pers);
        console.log(pers);
    }

    onDeletePersonById(id:string):void{
        console.log('paso por aqui');

        this.list = this.list.filter(element => element.id !== id)
    }
}