import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";


import { PhotoFormModule } from "./photo-form/photo-form.module";
import { PhotoListModule } from "./photo-list/photo-list.module";
import { PhotoModule } from "./photo/photo.module";
import { PhotoDetailsModule } from "./photo-details/photo-details.module";
import { DarkenOnHoverModule } from "../shared/directive/darken-on-hover/darken-on-hover.module";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [
        PhotoModule,
        PhotoFormModule,
        PhotoListModule,  
        DarkenOnHoverModule,
        PhotoDetailsModule,
        RouterModule      
    ]
})
export class PhotosModule {

}