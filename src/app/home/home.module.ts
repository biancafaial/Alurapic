import { NgModule } from "@angular/core";
import { ReactiveFormsModule} from '@angular/forms'
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { LoginComponent } from "./login/login.component";
import { VmessageModule } from "../shared/components/vmessage/vmessage.module";

@NgModule({
    declarations: [
       LoginComponent,
      
    ],  
      imports:[ 
        CommonModule,
        ReactiveFormsModule,
        VmessageModule,
        RouterModule
    ]
})
export class HomeModule {}