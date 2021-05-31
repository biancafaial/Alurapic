import { NgModule } from '@angular/core';
import { PhotoFormComponent } from './photo-form.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VmessageModule } from 'src/app/shared/components/vmessage/vmessage.module';

@NgModule({
    declarations: [PhotoFormComponent],

    imports:[
        CommonModule,
        ReactiveFormsModule,
        VmessageModule,
        FormsModule
    ]

})
export class PhotoFormModule { }