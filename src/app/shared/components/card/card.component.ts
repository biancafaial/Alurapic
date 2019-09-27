import { Component, Input } from "@angular/core";

@Component({
    selector: 'ap-card',
    templateUrl:'./card.component.html'
})
export class CardComponet{
    @Input()
    title: string = '';
    
}