import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { LoginComponent } from "./login/login.component";
import { VmessageModule } from "../shared/components/vmessage/vmessage.module";
import { SingUpComponent } from "./singup/singup.component";

@NgModule({
    declarations: [
       LoginComponent,
       SingUpComponent
       
      
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