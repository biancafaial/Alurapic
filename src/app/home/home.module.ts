import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { LoginComponent } from "./login/login.component";
import { VmessageModule } from "../shared/components/vmessage/vmessage.module";
import { SignUpComponent } from "./signup/signup.component";
import { HomeComponent } from './home.component';

@NgModule({
    declarations: [
       LoginComponent,
       SignUpComponent,
       HomeComponent
       
      
    ],  
      imports:[ 
        CommonModule,
        ReactiveFormsModule,
        VmessageModule,
        RouterModule,
        FormsModule
    ]
})
export class HomeModule {}