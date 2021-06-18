import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImediateClickDirective } from './imediate-click.Directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ImediateClickDirective
  ],
  exports:[
    ImediateClickDirective
  ]

})
export class ImediateClickModule { }
