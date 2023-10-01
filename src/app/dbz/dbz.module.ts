import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbzMainPageComponent } from './page/main-page-component';
import { ListComponent } from './components/list/list.component';
import { AddPersonComponent } from './components/add-person/add-person.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DbzMainPageComponent,
    ListComponent,
    AddPersonComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    DbzMainPageComponent
  ]
})
export class DbzModule { }
