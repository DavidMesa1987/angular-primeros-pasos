import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponet } from './componets/counter.component';

@NgModule({
    declarations: [
        CounterComponet
    ],
    imports: [ CommonModule ],
    exports: [
        CounterComponet
    ],
    providers: [],
})
export class CounterModule {}